import sharedConfig from "@continuum-ui/tailwind-config";
import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
const config: Pick<Config, "prefix" | "presets" | "content"> = {
    content: [
        "./index.html", 
        "./src/**/*.{js,ts,jsx,tsx}", 
        "../../node_modules/@continuum-ui/components/src/**/*.{js,ts,jsx,tsx}",
        "../../node_modules/@continuum-ui/spectrum/src/**/*.{js,ts,jsx,tsx}"
    ],
    presets: [sharedConfig]
};

export default config;
