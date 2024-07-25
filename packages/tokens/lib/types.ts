// we really don't care about $schema, private, or uuid
export type SetValue = {
    value: string;
    deprecated?: boolean;
};

export type OriginalValues = {
    name: string;
    value: string;
}

/** our token object we map the original tokens to */
export type MappedToken = {
    name: string;
    value: string;
    original?: OriginalValues;
};

export type TokenValue<T = ""> = {
    value?: string;
    sets?: {
        [K in keyof T]: SetValue;
    };
    deprecated?: boolean;
}

export type MappedThemeSet = { light: MappedToken[], dark: MappedToken[], /* wireframe: MappedToken[] */ };
export type MappedScaleSet = { desktop: MappedToken[], mobile: MappedToken[] };

export type SpectrumScale = "desktop" | "mobile";
// i think wireframe is the high contrast setting
export type SpectrumTheme = "light" | "dark" | "wireframe";
export type SpectrumDirection = "ltr" | "rtl";

export type Options = {
    /** out out directory */
    out: string;
    /** include prefix? */
    prefix?: string;
    /** strip rgb if building for tailwind */
    rgb: "spectrum" | "tailwind";
};
