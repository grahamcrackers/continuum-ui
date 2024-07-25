import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SearchIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M43.338 40.3 32.719 29.679a16.043 16.043 0 1 0-3.04 3.04L40.3 43.338a2.155 2.155 0 0 0 3.04-3.04ZM20 32a12 12 0 1 1 12-12 12 12 0 0 1-12 12Z" />
            </svg>
        );
    },
);
