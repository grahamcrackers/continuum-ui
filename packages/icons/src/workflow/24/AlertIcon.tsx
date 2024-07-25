import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AlertIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M44.37 39.036 25.752 5.186a2 2 0 0 0-3.5 0L3.63 39.036A2 2 0 0 0 5.383 42h37.234a2 2 0 0 0 1.753-2.964ZM24 39a3 3 0 1 1 3-3 3 3 0 0 1-3 3Zm-2.4-10V15a1 1 0 0 1 1-1h2.8a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-2.8a1 1 0 0 1-1-1Z" />
            </svg>
        );
    },
);
