import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FilterEditIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 0 48 48"
                width="48"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="m47.713 28.966-4.68-4.68a.986.986 0 0 0-.7-.287H42.3a1.114 1.114 0 0 0-.753.33L27.1 38.776a.811.811 0 0 0-.2.342l-2.816 8.112c-.092.306.373.69.636.69a.233.233 0 0 0 .05-.005c.224-.052 6.944-2.461 8.117-2.814a.8.8 0 0 0 .336-.2L47.67 30.453a1.117 1.117 0 0 0 .33-.717.992.992 0 0 0-.287-.77ZM32.226 43.6c-1.754.527-4.5 1.747-6.02 2.2l2.189-6.022ZM42.885 4H5.119a1.464 1.464 0 0 0-1.136 2.388l16.1 19.671v13.4a1.464 1.464 0 0 0 2.46 1.073l4.93-5.445A1.464 1.464 0 0 0 27.958 34v-7.973L44.021 6.388A1.464 1.464 0 0 0 42.885 4Z" />
            </svg>
        );
    },
);
