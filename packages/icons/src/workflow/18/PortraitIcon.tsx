import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PortraitIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <circle cx="18" cy="11" r="3.5" />
                <path d="M31 2H5a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm-1 30h-6v-4a2 2 0 0 0 2-2v-6a4 4 0 0 0-4-4h-8a4 4 0 0 0-4 4v6a2 2 0 0 0 2 2v4H6V4h24Z" />
            </svg>
        );
    },
);
