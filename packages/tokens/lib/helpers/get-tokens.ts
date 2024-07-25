import colorAliases from "@adobe/spectrum-tokens/src/color-aliases.json";
import colorComponent from "@adobe/spectrum-tokens/src/color-component.json";
import colors from "@adobe/spectrum-tokens/src/color-palette.json";
import semanticColors from "@adobe/spectrum-tokens/src/semantic-color-palette.json";
import icons from "@adobe/spectrum-tokens/src/icons.json";
import layout from "@adobe/spectrum-tokens/src/layout.json";
import layoutComponent from "@adobe/spectrum-tokens/src/layout-component.json";
import typography from "@adobe/spectrum-tokens/src/typography.json";
import { getTokens, getTokenScaleSets, getTokenThemeSets, pxToRem } from "../utils";
import { Options } from "../types";

/* any aditional cleaning can be done here */

// tokens with theme (.light,.dark,.wireframe)
export const getColorTokens = (options: Options) => {
    return {
        tokens: getTokens(colors, options),
        sets: getTokenThemeSets(colors, options),
    };
};

export const getColorAliasTokens = (options: Options) => {
    return {
        tokens: getTokens(colorAliases, options),
        sets: getTokenThemeSets(colorAliases, options),
    };
};

export const getColorComponentTokens = (options: Options) => {
    return {
        tokens: getTokens(colorComponent, options),
        sets: getTokenThemeSets(colorComponent, options),
    };
};

export const getSemanticColorTokens = (options: Options) => {
    return {
        tokens: getTokens(semanticColors, options),
        sets: getTokenThemeSets(semanticColors, options),
    };
};

export const getIconTokens = (options: Options) => {
    return {
        tokens: getTokens(icons, options),
        sets: getTokenThemeSets(icons, options),
    };
};

// tokens with scale (.desktop,.mobile)

export const getLayoutTokens = (options: Options) => {
    return {
        tokens: getTokens(layout, options),
        sets: getTokenScaleSets(layout, options),
    };
};

export const getLayoutComponentTokens = (options: Options) => {
    return {
        tokens: getTokens(layoutComponent, options),
        sets: getTokenScaleSets(layoutComponent, options),
    };
};

export const getTypographyTokens = (options: Options) => {
    const { desktop: d, mobile: m } = getTokenScaleSets(typography, options);

    const desktop = d.map(({ value, ...rest }) => ({ ...rest, value: pxToRem(value) }));
    const mobile = m.map(({ value, ...rest }) => ({ ...rest, value: pxToRem(value) }));

    return {
        tokens: getTokens(typography, options),
        sets: { desktop, mobile },
    };
};
