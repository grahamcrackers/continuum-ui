import React from "react";
import { ThemeProvider } from "@continuum-ui/spectrum/contexts";
import type { Preview } from "@storybook/react";

import "@continuum-ui/utils/styles.css";
import "../src/index.css";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story, context) => {
            return (
                <ThemeProvider theme="light" storageKey="sb-ui-theme">
                    <Story />
                </ThemeProvider>
            );
        },
    ],
};

export default preview;
