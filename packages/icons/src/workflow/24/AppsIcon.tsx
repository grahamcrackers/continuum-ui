import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AppsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="8" rx="2" ry="2" width="8" x="6" y="6" />
                <rect height="8" rx="2" ry="2" width="8" x="20" y="6" />
                <rect height="8" rx="2" ry="2" width="8" x="34" y="6" />
                <rect height="8" rx="2" ry="2" width="8" x="6" y="20" />
                <rect height="8" rx="2" ry="2" width="8" x="20" y="20" />
                <rect height="8" rx="2" ry="2" width="8" x="34" y="20" />
                <rect height="8" rx="2" ry="2" width="8" x="6" y="34" />
                <rect height="8" rx="2" ry="2" width="8" x="20" y="34" />
                <rect height="8" rx="2" ry="2" width="8" x="34" y="34" />
            </svg>
        );
    },
);
