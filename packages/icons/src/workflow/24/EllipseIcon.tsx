import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const EllipseIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24 9.8c10.036 0 18.2 6.37 18.2 14.2S34.036 38.2 24 38.2 5.8 31.83 5.8 24 13.964 9.8 24 9.8ZM24 6C11.85 6 2 14.059 2 24s9.85 18 22 18 22-8.059 22-18S36.15 6 24 6Z" />
            </svg>
        );
    },
);
