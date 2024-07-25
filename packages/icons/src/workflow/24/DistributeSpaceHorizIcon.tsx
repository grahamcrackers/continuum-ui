import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DistributeSpaceHorizIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="30" rx="2" ry="2" width="14" x="6" y="14" />
                <rect height="20" rx="2" ry="2" width="16" x="28" y="16" />
                <path d="M35 2h-3V1a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v1h-8V1a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v1h-3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V6h8v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V6h3a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z" />
            </svg>
        );
    },
);
