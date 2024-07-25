import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BoxIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M22 46 5.029 36.572A2 2 0 0 1 4 34.823V18l18 10ZM42.971 36.572 26 46V28l18-10v16.823a2 2 0 0 1-1.029 1.749ZM32.3 6.155l-7.347-3.978a2 2 0 0 0-1.906 0L4.74 12.094a1.03 1.03 0 0 0 0 1.812l6.911 3.744ZM43.26 12.094l-6.8-3.682-20.645 11.5L24 24.339l19.26-10.433a1.03 1.03 0 0 0 0-1.812Z" />
            </svg>
        );
    },
);
