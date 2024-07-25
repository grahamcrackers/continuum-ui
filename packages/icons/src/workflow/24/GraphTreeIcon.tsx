import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GraphTreeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="22" rx=".953" ry=".953" width="20" x="4" y="12" />
                <rect height="12" rx=".961" ry=".961" width="16" x="28" y="12" />
                <rect height="6" rx=".828" ry=".828" width="8" x="28" y="28" />
                <rect height="6" rx=".926" ry=".926" width="4" x="40" y="28" />
            </svg>
        );
    },
);
