import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ConfidenceFourIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="8" rx="1" ry="1" width="6" x="2" y="26" />
                <rect height="16" rx="1" ry="1" width="6" x="10" y="18" />
                <rect height="24" rx="1" ry="1" width="6" x="18" y="10" />
                <rect height="32" rx="1" ry="1" width="6" x="26" y="2" />
            </svg>
        );
    },
);
