import colors from "@adobe/spectrum-tokens/src/color-palette.json";
import { MappedToken, TokenValue } from "./types";
import { Options } from "./types";

const filters = ["cjk"];

export const colorDictionary = [
    "gray",
    "blue",
    "red",
    "orange",
    "yellow",
    "chartreuse",
    "celery",
    "green",
    "seafoam",
    "cyan",
    "indigo",
    "purple",
    "fuchsia",
    "magenta",
    "pink",
    "turquoise",
    "brown",
    "silver",
    "cinnamon",
];


export const pxToRem = (px: string | number, fontSize = 16) => {
    if (typeof px === "string") {
        px = parseFloat(px);
    }
    return px / fontSize + "rem";
};

export const trimRGB = (value: string) => {
    return value.substring(value.indexOf("(") + 1, value.indexOf(")")).replace(/,/g, "");
};

export const trimVariable = (value: string) => {
    return value.substring(value.indexOf("{") + 1, value.indexOf("}")).replace(/,/g, "");
};

export const getPrefix = (value?: string) => {
    if(!value) return;
    return value + "-";
}

export const getAllColors = () => {
    const colorKeys: string[] = [];

    Object.keys(colors).forEach((key) => {
        const obj = colors[key as keyof typeof colors] as unknown as TokenValue<MappedThemeSet>;
        if (!obj.sets) return;

        const colorName = key.split("-")[0];
        if (colorName) colorKeys.push(colorName);
    });

    return [...new Set(colorKeys)];
};

/** create a css variable token */
export const tokenize = (value: string, options: Options) => {
    if (value.includes("{")) {
        const tokenName = trimVariable(value);
        const prefix = getPrefix(options.prefix);

        return `var(--${prefix}${tokenName})`;
    }

    if (options.rgb === "tailwind" && value.includes("rgb")) {
        return trimRGB(value);
    }

    return value;
};

/** get tokens that don't have multiple variables */
export const getTokens = (tokensJson = {}, options: Options) => {
    const mapped: MappedToken[] = [];
    Object.keys(tokensJson).forEach((key) => {
        const obj = tokensJson[key as keyof typeof tokensJson] as unknown as TokenValue;
        if (obj.sets) return;
        if (obj.deprecated) return;
        

        if (obj.value) {
            if (filters.filter((filter) => key.includes(filter)).length) return;
            mapped.push({ name: key, value: tokenize(obj.value, options), original: { name: key, value: obj.value } });
        }
    });

    return mapped;
};

type MappedScaleSet = { desktop: MappedToken[]; mobile: MappedToken[] };

/** get tokens for .desktop and .mobile variables */
export const getTokenScaleSets = (tokensJson = {}, options: Options) => {
    const mapped: MappedScaleSet = {
        desktop: [],
        mobile: [],
    };

    Object.keys(tokensJson).forEach((key) => {
        const obj = tokensJson[key as keyof typeof tokensJson] as unknown as TokenValue<MappedScaleSet>;
        if (!obj.sets) return;

        const desktopValue = obj.sets.desktop.value ?? "";
        const mobileValue = obj.sets.mobile.value ?? "";

        mapped.desktop.push({ name: key, value: tokenize(desktopValue, options ), original: { name: key, value: desktopValue } });
        mapped.mobile.push({ name: key, value: tokenize(mobileValue, options), original: { name: key, value: mobileValue } });
    });

    return mapped;
};

type MappedThemeSet = { light: MappedToken[]; dark: MappedToken[] /* wireframe: MappedToken[] */ };

/** get tokens for .desktop and .mobile variables */
export const getTokenThemeSets = (tokensJson = {}, options: Options) => {
    const mapped: MappedThemeSet = {
        light: [],
        dark: [],
        // todo: wireframe: []
    };

    Object.keys(tokensJson).forEach((key) => {
        const obj = tokensJson[key as keyof typeof tokensJson] as unknown as TokenValue<MappedThemeSet>;
        if (!obj.sets) return;

        const lightValue = obj.sets.light.value
        const darkValue = obj.sets.dark.value

        mapped.light.push({ name: key, value: tokenize(lightValue, options), original: { name: key, value: lightValue } });
        mapped.dark.push({ name: key, value: tokenize(darkValue, options), original: { name: key, value: darkValue } });
    });

    return mapped;
};
