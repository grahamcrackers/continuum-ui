import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ViewCardIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M6 44h8V24H4v18a2 2 0 0 0 2 2ZM4 8v12h10V6H6a2 2 0 0 0-2 2ZM18 30h10v14H18zM18 6h10v20H18zM32 6v8h10V8a2 2 0 0 0-2-2ZM32 44h8a2 2 0 0 0 2-2v-6H32ZM32 18h10v14H32z" />
            </svg>
        );
    },
);
