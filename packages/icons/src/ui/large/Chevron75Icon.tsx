import * as React from "react";

import { iconVariants } from "../../helpers";
import type { IconProps } from "../../helpers";

export const Chevron75Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 12 12"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M3.833 11.578a1.05 1.05 0 0 1-.742-1.793L6.876 6 3.091 2.215A1.05 1.05 0 1 1 4.575.73l4.529 4.527a1.05 1.05 0 0 1 0 1.486L4.575 11.27a1.05 1.05 0 0 1-.742.308" />
            </svg>
        );
    },
);
