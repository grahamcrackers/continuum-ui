import * as React from "react";

import { iconVariants } from "../../helpers";
import type { IconProps } from "../../helpers";

export const Cross400Icon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m9.748 8 4.915-4.915a1.236 1.236 0 0 0-1.748-1.748L8 6.252 3.085 1.337a1.236 1.236 0 0 0-1.748 1.748L6.252 8l-4.915 4.915a1.236 1.236 0 1 0 1.748 1.748L8 9.748l4.915 4.915a1.236 1.236 0 0 0 1.748-1.748z" />
            </svg>
        );
    },
);
