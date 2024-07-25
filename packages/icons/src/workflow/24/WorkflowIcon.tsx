import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const WorkflowIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="20" rx="2" ry="2" width="12" x="4" y="14" />
                <rect height="12" rx="2" ry="2" width="12" x="32" y="4" />
                <rect height="12" rx="2" ry="2" width="12" x="32" y="18" />
                <rect height="12" rx="2" ry="2" width="12" x="32" y="32" />
                <path d="M30 11V9a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v13h-3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3v13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-3V26h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-3V12h3a1 1 0 0 0 1-1Z" />
            </svg>
        );
    },
);
