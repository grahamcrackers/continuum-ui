import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AppsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="6" rx="1" ry="1" width="6" x="2" y="2" />
                <rect height="6" rx="1" ry="1" width="6" x="14" y="2" />
                <rect height="6" rx="1" ry="1" width="6" x="26" y="2" />
                <rect height="6" rx="1" ry="1" width="6" x="2" y="14" />
                <rect height="6" rx="1" ry="1" width="6" x="14" y="14" />
                <rect height="6" rx="1" ry="1" width="6" x="26" y="14" />
                <rect height="6" rx="1" ry="1" width="6" x="2" y="26" />
                <rect height="6" rx="1" ry="1" width="6" x="14" y="26" />
                <rect height="6" rx="1" ry="1" width="6" x="26" y="26" />
            </svg>
        );
    },
);
