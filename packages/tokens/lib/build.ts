import * as ejs from "ejs";
import fs from "fs-extra";
import path from "path";
import prettier from "prettier";
import yargs from "yargs";

import {
    getColorAliasTokens,
    getColorComponentTokens,
    getColorTokens,
    getIconTokens,
    getLayoutComponentTokens,
    getLayoutTokens,
    getSemanticColorTokens,
    getTypographyTokens
} from "./helpers/get-tokens";
import { MappedScaleSet, MappedThemeSet, MappedToken, Options } from "./types";

const getTemplateSource = (templateFile: string) => {
    return fs.readFile(path.resolve(__dirname, "./templates/", templateFile), {
        encoding: "utf8",
    });
};

const prettierOptions = prettier.resolveConfig(process.cwd());

type TokensCollection = {
    tokens: MappedToken[];
    sets: MappedThemeSet | MappedScaleSet;
};

const prettierCssOptions = {
    ...prettierOptions,
    printWidth: 120,
};

const generateCssFile = async (tokens: TokensCollection, template: string, outDir: string, filename: string) => {
    const raw = ejs.render(template, { ...tokens });
    const source = await prettier.format(raw, { ...prettierCssOptions, parser: "css" });
    await fs.writeFile(path.join(outDir, filename), source, "utf8");
};



const getOptions = async (): Promise<Options> => {
    const parser = yargs(process.argv.slice(2)).options({
        o: { type: "string", alias: "out", default: "../src" },
        p: { type: "string", alias: "prefix" },
        rgb: { choices: ["spectrum", "tailwind"], default: "spectrum" },
    });
    const options = await parser.parse();

    return options as unknown as Options;
};

// start building files
(async () => {
    const options = await getOptions();
    const templates = {
        theme: await getTemplateSource("theme.css.ejs"),
        scale: await getTemplateSource("scale.css.ejs"),
    };

    const outDir = path.join(__dirname, options.out);
    fs.ensureDir(outDir);

    // tokens for theme
    await generateCssFile(getColorTokens(options), templates.theme, outDir, "colors.css");
    await generateCssFile(getColorAliasTokens(options), templates.theme, outDir, "colors-aliases.css");
    await generateCssFile(getColorComponentTokens(options), templates.theme, outDir, "colors-component.css");
    await generateCssFile(getSemanticColorTokens(options), templates.theme, outDir, "colors-semantic.css");
    await generateCssFile(getIconTokens(options), templates.theme, outDir, "icons.css");

    // tokens for scale
    await generateCssFile(getLayoutTokens(options), templates.scale, outDir, "layout.css");
    await generateCssFile(getLayoutComponentTokens(options), templates.scale, outDir, "layout-component.css");
    await generateCssFile(getTypographyTokens(options), templates.scale, outDir, "typography.css");
})();
