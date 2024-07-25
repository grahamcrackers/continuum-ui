import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FastForwardIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20 42V5.729a2 2 0 0 1 3.257-1.556l21.71 18.133a2 2 0 0 1 0 3.112l-21.71 18.134A2 2 0 0 1 20 42ZM16 11.477l-8.743-7.3A2 2 0 0 0 4 5.729V42a2 2 0 0 0 3.257 1.556L16 36.249Z" />
            </svg>
        );
    },
);
