import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SuccessMetricIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="10" rx="2" ry="2" width="10" x="4" y="34" />
                <rect height="30" rx="2.003" ry="2.003" width="10" x="18" y="14" />
                <rect height="16" rx="2" ry="2" width="10" x="32" y="28" />
                <path d="M15.529 21.529h-6.49a1 1 0 0 1-1-1v-.5a1 1 0 0 1 1-1h6.49ZM10.562 9.584l4.967 3.18-1.346 2.1-4.967-3.18a1 1 0 0 1-.3-1.381l.268-.418a1 1 0 0 1 1.378-.301ZM21.309 11.542 19 4.267a.5.5 0 0 0-.628-.325l-1.428.458a.5.5 0 0 0-.325.628l2.071 6.519ZM30.51 21.529H37a1 1 0 0 0 1-1v-.5a1 1 0 0 0-1-1h-6.49ZM35.477 9.584l-4.967 3.18 1.346 2.1 4.967-3.18a1 1 0 0 0 .3-1.381l-.268-.418a1 1 0 0 0-1.378-.301ZM24.73 11.542l2.31-7.275a.5.5 0 0 1 .628-.325l1.427.453a.5.5 0 0 1 .325.628l-2.071 6.519Z" />
            </svg>
        );
    },
);
