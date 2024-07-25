import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ShipIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="m6 24 18-4 18 4V9.333L46 8V6H28V2a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v4H2v2l4 1.333Zm4-14h28v2H10Zm38 20.403v4.264c0 6.616-7.22 5.475-7.942 12.203A1.319 1.319 0 0 1 38.725 48H26.667L24 24l22.956 5.101A1.334 1.334 0 0 1 48 30.403ZM1.044 29.1 24 24v24H9.275a1.319 1.319 0 0 1-1.333-1.13C7.22 40.142 0 41.283 0 34.667v-4.264A1.334 1.334 0 0 1 1.044 29.1Z" />
            </svg>
        );
    },
);
