import * as React from "react";

import { iconVariants } from "../../helpers";
import type { IconProps } from "../../helpers";

export const Cross500Icon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m9.823 8 5.674-5.674A1.289 1.289 0 1 0 13.675.504L8 6.179 2.326.503A1.288 1.288 0 0 0 .504 2.326l5.674 5.675-5.674 5.674a1.288 1.288 0 0 0 1.822 1.822L8 9.822l5.674 5.675a1.289 1.289 0 1 0 1.823-1.822z" />
            </svg>
        );
    },
);
