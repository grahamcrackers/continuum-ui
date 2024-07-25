import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const VignetteIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M31 4H5a1 1 0 0 0-1 1v26a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Zm-1 26H6V6h24Z" />
                <path d="M28 15.632V8h-7.632A10.283 10.283 0 0 1 28 15.632ZM15.632 8H8v7.632A10.283 10.283 0 0 1 15.632 8ZM8 20.368V28h7.632A10.283 10.283 0 0 1 8 20.368ZM20.368 28H28v-7.632A10.283 10.283 0 0 1 20.368 28Z" />
            </svg>
        );
    },
);
