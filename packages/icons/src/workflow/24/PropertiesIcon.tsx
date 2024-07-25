import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PropertiesIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M43 8H21.675a6.956 6.956 0 0 0-13.35 0H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3.325a6.956 6.956 0 0 0 13.35 0H43a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Zm-28 5.3a3.3 3.3 0 1 1 3.3-3.3 3.3 3.3 0 0 1-3.3 3.3ZM5 26h21.325a6.956 6.956 0 0 0 13.35 0H43a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-3.325a6.956 6.956 0 0 0-13.35 0H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Zm24.7-2a3.3 3.3 0 1 1 3.3 3.3 3.3 3.3 0 0 1-3.3-3.3Z" />
                <path d="M43 36H27.675a6.956 6.956 0 0 0-13.35 0H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9.325a6.956 6.956 0 0 0 13.35 0H43a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Zm-22 5.3a3.3 3.3 0 1 1 3.3-3.3 3.3 3.3 0 0 1-3.3 3.3Z" />
            </svg>
        );
    },
);
