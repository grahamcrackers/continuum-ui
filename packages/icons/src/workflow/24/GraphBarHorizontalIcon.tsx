import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GraphBarHorizontalIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M42 14H10V6h32a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2ZM26 24H10v-8h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2ZM18 34h-8v-8h8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2ZM14 44h-4v-8h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2Z" />
            </svg>
        );
    },
);
