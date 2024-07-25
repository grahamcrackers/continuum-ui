import * as React from "react";

import { iconVariants } from "../../helpers";
import type { IconProps } from "../../helpers";

export const Chevron50Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="m6.27 3.438-.007-.004V3.43L3.228.435a.799.799 0 1 0-1.124 1.138L4.562 4 2.085 6.446A.8.8 0 0 0 3.21 7.585l3.053-3.016a.8.8 0 0 0 .008-1.131z" />
            </svg>
        );
    },
);
