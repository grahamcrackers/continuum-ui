import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CopyIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M14 30V14H4a2 2 0 0 0-2 2v26a2 2 0 0 0 2 2h26a2 2 0 0 0 2-2V32H16a2 2 0 0 1-2-2Z" />
                <rect height="4" rx="1" ry="1" width="4" x="18" y="24" />
                <rect height="4" rx="1" ry="1" width="4" x="26" y="24" />
                <rect height="4" rx="1" ry="1" width="4" x="34" y="24" />
                <rect height="4" rx="1" ry="1" width="4" x="42" y="24" />
                <rect height="4" rx="1" ry="1" width="4" x="42" y="16" />
                <rect height="4" rx="1" ry="1" width="4" x="42" y="8" />
                <rect height="4" rx="1" ry="1" width="4" x="42" />
                <rect height="4" rx="1" ry="1" width="4" x="34" />
                <rect height="4" rx="1" ry="1" width="4" x="26" />
                <rect height="4" rx="1" ry="1" width="4" x="18" />
                <rect height="4" rx="1" ry="1" width="4" x="18" y="8" />
                <rect height="4" rx="1" ry="1" width="4" x="18" y="16" />
            </svg>
        );
    },
);
