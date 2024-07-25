import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GraphGanttIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="36"
                viewBox="0 0 36 36"
                width="36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <rect height="4" rx="1" ry="1" width="8" />
                <rect height="4" rx="1" ry="1" width="18" x="6" y="6" />
                <rect height="4" rx="1" ry="1" width="8" x="10" y="12" />
                <rect height="4" rx="1" ry="1" width="6" x="14" y="18" />
                <rect height="4" rx="1" ry="1" width="16" x="14" y="24" />
                <rect height="4" rx="1" ry="1" width="18" x="18" y="30" />
            </svg>
        );
    },
);
