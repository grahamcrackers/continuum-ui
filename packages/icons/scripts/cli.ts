import { transformAsync } from "@babel/core";
import svgr from "@svgr/core";
import cheerio from "cheerio";
import * as ejs from "ejs";
import fs from "fs-extra";
import { camelCase } from "lodash";
import path from "path";
import prettier from "prettier";

const isTagElement = (element: any): element is cheerio.TagElement => {
    return element?.attribs !== undefined;
};

function readyForJSX(svgRaw: string, classNameId: string) {
    const $ = cheerio.load(svgRaw, { xmlMode: true });
    $("*").each((i, el) => {
        if (!isTagElement(el)) return;
        Object.keys(el.attribs).forEach((attrKey) => {
            if (attrKey.includes("-")) {
                // @ts-ignore 
                $(el).attr(camelCase(attrKey), el.attribs[attrKey]).removeAttr(attrKey);
            }
            if (attrKey === "class") {
                // @ts-ignore 
                $(el).attr("className", el.attribs[attrKey]).removeAttr(attrKey);
            }
        });
    });

    return $("svg")
        .attr("class", "...")
        .attr("focusable", "...")
        .attr("aria-hidden", "...")
        .attr("props", "...")
        .attr("ref", "forwardedRef")
        .toString()
        .replace(/stroke=['|"]currentColor['|"]/g, "stroke={color}")
        .replace(/fill=['|"]currentColor['|"]/g, "fill={color}")
        .replace(`class="..."`, `className={iconVariants({ size, className })}`)
        .replace(`focusable="..."`, "focusable={focusable}")
        .replace(`aria-hidden="..."`, "aria-hidden={hidden}")
        .replace(`props="..."`, "{...props}")
        .replace(`ref="forwardedRef"`, "ref={forwardedRef}");
}

type IconModule = "ui" | "icons" | "workflow" | "illustrated"
type IconStyle = "large" | "medium";
type WorkflowStyle = "18" | "24";

const getIconSourcePath = (module: IconModule, style: IconStyle | WorkflowStyle) => {
    const rootNodeModulesPath = path.resolve(__dirname, "../../../node_modules");
    switch(module) {
        case "ui":
            return path.join(rootNodeModulesPath, `@spectrum-css/ui-icons/dist/${style}`);
        case "icons":
            return path.join(rootNodeModulesPath, `@adobe/spectrum-css/icons/${style}`);
        case "workflow":
            return path.join(rootNodeModulesPath, `@adobe/spectrum-css-workflow-icons/dist/${style}`);
        default:
            return "";
    }
}

const generateSafeComponentName = (fileName: string) => {
    switch (fileName) {
        case "123.svg":
            return "OneTwoThreeIcon";
        case "3DMaterials.svg":
            return "ThreeDMaterialsIcon";
        default:
            return `${fileName.split(".")[0]}Icon`
    }
}

const getIcons = async (module: IconModule, style: IconStyle | WorkflowStyle) => {
    const pathname = getIconSourcePath(module, style);
    const files = await fs.readdir(pathname);

    return Promise.all(
        files.map(async (file) => ({
            svg: await await fs.readFile(path.resolve(pathname, file), { encoding: "utf8" }),
            componentName: generateSafeComponentName(file),
        })),
    );
};

const templateHelpers = {
    iconToSVGSourceAsJSX(svg: string, componentName: string) {
        return readyForJSX(svg, componentName);
    },
    stripExtension(fileName: string) {
        return fileName.replace(/(.*)\.\w+$/, "$1");
    },
}

const getTemplateSource = (templateFile: string) => {
    return fs.readFile(path.resolve(__dirname, "./templates/", templateFile), {
        encoding: "utf8",
    });
};



const buildIcons = async (module: IconModule, style: IconStyle | WorkflowStyle) => {
    const icons = await getIcons(module, style);
    const templates = {
        icon: await getTemplateSource("icon.tsx.ejs"),
        entry: await getTemplateSource("entry.tsx.ejs"),
    }
    const prettierOptions = await prettier.resolveConfig(process.cwd());

    const outDir = path.join(__dirname, "..", "src", module, style);
    
    fs.ensureDir(outDir)

    await Promise.all(
        icons.flatMap(async ({ svg, componentName }) => {
            const iconRaw = await ejs.render(templates.icon, { svg, componentName, ...templateHelpers });
            const iconPrettified = await prettier.format(iconRaw, { ...prettierOptions, parser: "typescript"});
            await fs.writeFile(path.join(outDir, `${componentName}.tsx`), iconPrettified, "utf8");
        }),
    );

    const entryRaw = await ejs.render(templates.entry, { icons, ...templateHelpers });
    const entryPrettified = await prettier.format(entryRaw, { ...prettierOptions, parser: "typescript"});
    await fs.writeFile(path.join(outDir, `index.ts`), entryPrettified, "utf8");
};

(async () => {
    await buildIcons("ui", "large");
    await buildIcons("ui", "medium");
    // await buildIcons("icons", "large");
    // await buildIcons("icons", "medium");
    // await buildIcons("workflow", "18");
    // await buildIcons("workflow", "24");
})();
