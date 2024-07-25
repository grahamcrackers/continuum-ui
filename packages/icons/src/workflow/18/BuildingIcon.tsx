import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BuildingIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M33 2H5a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h11V22h6v12h11a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM12 26H6v-4h6Zm0-8H6v-4h6Zm0-8H6V6h6Zm10 8h-6v-4h6Zm0-8h-6V6h6Zm10 16h-6v-4h6Zm0-8h-6v-4h6Zm0-8h-6V6h6Z" />
            </svg>
        );
    },
);
