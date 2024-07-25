import * as React from "react";

import { iconVariants } from "../../helpers";
import type { IconProps } from "../../helpers";

export const Checkmark300Icon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M5.627 14.894a1.36 1.36 0 0 1-1.042-.488l-4.1-4.92A1.357 1.357 0 0 1 2.569 7.75l3.027 3.631L13.4 1.448a1.356 1.356 0 0 1 2.133 1.675l-8.84 11.252a1.36 1.36 0 0 1-1.048.519z" />
            </svg>
        );
    },
);
