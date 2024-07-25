import * as React from "react";

import { iconVariants } from "../../helpers";
import type { IconProps } from "../../helpers";

export const Chevron500Icon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M12.133 7.271 5.263.401a1.03 1.03 0 0 0-1.457 1.457L9.947 8l-6.141 6.142a1.03 1.03 0 0 0 1.457 1.457l6.87-6.87a1.03 1.03 0 0 0 0-1.457z" />
            </svg>
        );
    },
);
