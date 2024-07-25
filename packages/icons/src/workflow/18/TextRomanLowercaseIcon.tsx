import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TextRomanLowercaseIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="36"
                viewBox="0 0 36 36"
                width="36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <rect height="4" rx="1" ry="1" width="22" x="14" y="4" />
                <rect height="4" rx="1" ry="1" width="22" x="14" y="16" />
                <rect height="4" rx="1" ry="1" width="22" x="14" y="28" />
                <path d="M10 2V.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V2ZM8 4v5.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V4ZM8 14v-1.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V14ZM6 16v5.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V16ZM12 14v-1.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V14ZM10 16v5.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V16ZM8 26v-1.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V26ZM6 28v5.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V28ZM12 26v-1.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V26ZM10 28v5.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V28ZM4 26v-1.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V26ZM2 28v5.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V28Z" />
            </svg>
        );
    },
);
