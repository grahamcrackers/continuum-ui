import * as React from "react";

import { iconVariants } from "../../helpers";
import type { IconProps } from "../../helpers";

export const Checkmark500Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M6.997 18.48a1.47 1.47 0 0 1-1.13-.53L.521 11.538a1.471 1.471 0 1 1 2.26-1.885l4.182 5.017L17.18 1.666a1.472 1.472 0 1 1 2.314 1.818L8.154 17.917a1.47 1.47 0 0 1-1.135.562z" />
            </svg>
        );
    },
);
