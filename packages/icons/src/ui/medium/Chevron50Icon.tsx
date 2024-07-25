import * as React from "react";

import { iconVariants } from "../../helpers";
import type { IconProps } from "../../helpers";

export const Chevron50Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M1.985 5.961a.695.695 0 0 1-.7-.704.7.7 0 0 1 .209-.493L3.279 3 1.51 1.251A.7.7 0 0 1 1.3.757.696.696 0 0 1 2.492.255l2.275 2.247a.7.7 0 0 1 0 .996L2.477 5.76a.7.7 0 0 1-.492.201" />
            </svg>
        );
    },
);
