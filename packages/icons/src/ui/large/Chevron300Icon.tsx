import * as React from "react";

import { iconVariants } from "../../helpers";
import type { IconProps } from "../../helpers";

export const Chevron300Icon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M4.696 15.853a1.187 1.187 0 0 1-.84-2.026L9.684 8 3.856 2.173A1.187 1.187 0 0 1 5.536.495L12.2 7.16a1.187 1.187 0 0 1 0 1.678l-6.666 6.666a1.18 1.18 0 0 1-.84.348z" />
            </svg>
        );
    },
);
