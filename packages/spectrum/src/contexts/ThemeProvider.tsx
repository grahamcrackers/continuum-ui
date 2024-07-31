// import React from "react";

// type Theme = "dark" | "light" | "system";

// type ThemeProviderProps = {
//     children: React.ReactNode;
//     defaultTheme?: Theme;
//     storageKey?: string;
// };

// type ThemeProviderState = {
//     theme: Theme;
//     setTheme: (theme: Theme) => void;
// };

// const initialState: ThemeProviderState = {
//     theme: "system",
//     setTheme: () => null,
// };

// export const ThemeProviderContext = React.createContext<ThemeProviderState>(initialState);

// export function ThemeProvider({
//     children,
//     defaultTheme = "system",
//     storageKey = "continuum-spectrum-ui-theme",
//     ...props
// }: ThemeProviderProps) {
//     const [theme, setTheme] = React.useState<Theme>(() => (localStorage.getItem(storageKey) as Theme) || defaultTheme);

//     React.useEffect(() => {
//         const root = window.document.documentElement;

//         root.classList.remove("light", "dark");

//         if (theme === "system") {
//             const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

//             root.classList.add(systemTheme);
//             return;
//         }

//         // todo: mobile/desktop
//         // todo: rtl/ltr

//         root.classList.add(theme);
//     }, [theme]);

//     const value = {
//         theme,
//         setTheme: (theme: Theme) => {
//             localStorage.setItem(storageKey, theme);
//             setTheme(theme);
//         },
//     };

//     return (
//         <ThemeProviderContext.Provider {...props} value={value}>
//             {children}
//         </ThemeProviderContext.Provider>
//     );
// }
import React, { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

type SpectrumTheme = "dark" | "light" | "system";
type SpectrumScale = "medium" | "large";
type SpectrumDirection = "rtl" | "ltr";
type SpectrumVars = "default" | "express";

type ThemeProviderProps = {
    children: React.ReactNode;
    theme?: SpectrumTheme;
    scale?: SpectrumScale;
    direction?: SpectrumDirection;
    vars?: SpectrumVars;
    storageKey?: string;
};

type ThemeProviderState = {
    theme: SpectrumTheme;
    setTheme: (theme: SpectrumTheme) => void;
};

const initialState: ThemeProviderState = {
    theme: "system",
    setTheme: () => null,
};

export const ThemeProviderContext = React.createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
    children,
    theme = "system",
    scale = "medium", // "medium" or "large"
    direction = "rtl",
    vars = "default", // "default" or "express"
    storageKey = "spectrum-ui-theme",
    ...props
}: ThemeProviderProps) {
    const [_theme, setTheme] = useLocalStorage<SpectrumTheme>(storageKey, theme);

    useEffect(() => {
        const root = window.document.documentElement;
        // the spectrum class will always be present
        root.classList.add("spectrum");

        root.classList.add(scale === "medium" ? "spectrum--medium" : "spectrum--large");

        if (vars === "express") {
            root.classList.add("spectrum--express");
        }

        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "spectrum--dark"
                : "spectrum--light";

            root.classList.add(systemTheme);
            return;
        }

        root.classList.add(_theme === "dark" ? "spectrum--dark" : "spectrum--light");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [_theme, scale, vars, direction]);

    const value = {
        theme,
        setTheme: (theme: SpectrumTheme) => {
            setTheme(theme);
        },
    };

    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
    );
}
