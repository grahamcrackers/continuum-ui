import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const KeyboardIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="6" rx="1" ry="1" width="26" x="10" y="26" />
                <rect height="6" rx="1" ry="1" width="8" y="26" />
                <rect height="6" rx="1" ry="1" width="8" x="38" y="26" />
                <rect height="6" rx="1" ry="1" width="10" y="18" />
                <rect height="6" rx="1" ry="1" width="10" x="36" y="18" />
                <rect height="6" rx="1" ry="1" width="6" y="10" />
                <rect height="6" rx="1" ry="1" width="6" x="12" y="18" />
                <rect height="6" rx="1" ry="1" width="6" x="20" y="18" />
                <rect height="6" rx="1" ry="1" width="6" x="28" y="18" />
                <rect height="6" rx="1" ry="1" width="6" x="8" y="10" />
                <rect height="6" rx="1" ry="1" width="6" x="16" y="10" />
                <rect height="6" rx="1" ry="1" width="6" x="24" y="10" />
                <rect height="6" rx="1" ry="1" width="6" x="32" y="10" />
                <rect height="6" rx="1" ry="1" width="6" x="40" y="10" />
            </svg>
        );
    },
);
