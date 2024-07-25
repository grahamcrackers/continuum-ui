import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GraphGanttIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="6" rx="1" ry="1" width="8" />
                <rect height="6" rx="1" ry="1" width="18" x="6" y="8" />
                <rect height="6" rx="1" ry="1" width="8" x="10" y="16" />
                <rect height="6" rx="1" ry="1" width="10" x="14" y="24" />
                <rect height="6" rx="1" ry="1" width="20" x="14" y="32" />
                <rect height="6" rx="1" ry="1" width="30" x="18" y="40" />
            </svg>
        );
    },
);
