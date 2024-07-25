import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ViewListIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="10" rx="2" ry="2" width="10" x="4" y="6" />
                <rect height="10" rx="2" ry="2" width="10" x="4" y="20" />
                <rect height="10" rx="2" ry="2" width="10" x="4" y="34" />
                <rect height="6" rx="1" ry="1" width="24" x="18" y="8" />
                <rect height="6" rx="1" ry="1" width="24" x="18" y="22" />
                <rect height="6" rx="1" ry="1" width="24" x="18" y="36" />
            </svg>
        );
    },
);
