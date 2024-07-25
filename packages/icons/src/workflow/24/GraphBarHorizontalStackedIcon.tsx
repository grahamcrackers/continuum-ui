import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GraphBarHorizontalStackedIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="44" rx="1" ry="1" width="4" x="4" y="4" />
                <path d="M10 26h6v8h-6zM10 6h18v8H10zM10 16h8v8h-8zM10 36h4v8h-4zM26 16h-6v8h6a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2ZM18 36h-2v8h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2ZM42 6H30v8h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2ZM22 26h-4v8h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Z" />
            </svg>
        );
    },
);
