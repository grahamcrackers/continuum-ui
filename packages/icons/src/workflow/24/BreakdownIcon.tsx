import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BreakdownIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M41 10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7v34a2 2 0 0 0 2 2h27a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H16v-4h25a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H16v-4h25a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H16V10Z" />
            </svg>
        );
    },
);
