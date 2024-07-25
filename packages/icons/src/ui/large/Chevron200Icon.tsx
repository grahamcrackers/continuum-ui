import * as React from "react";

import { iconVariants } from "../../helpers";
import type { IconProps } from "../../helpers";

export const Chevron200Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M5.123 15.005a1.14 1.14 0 0 1-.806-1.945L9.377 8l-5.06-5.06a1.14 1.14 0 0 1 1.612-1.61l5.865 5.864a1.14 1.14 0 0 1 0 1.612L5.929 14.67a1.14 1.14 0 0 1-.806.334z" />
            </svg>
        );
    },
);
