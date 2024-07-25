import * as React from "react";

import { iconVariants } from "../../helpers";
import type { IconProps } from "../../helpers";

export const Arrow500Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 22 22"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="m20.17 10.089-6.585-6.585a1.289 1.289 0 0 0-1.822 1.822l4.386 4.386H2.276a1.288 1.288 0 0 0 0 2.576h13.873l-4.386 4.386a1.289 1.289 0 0 0 1.822 1.822l6.585-6.585a1.29 1.29 0 0 0 0-1.822" />
            </svg>
        );
    },
);
