import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SandboxIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M42 6h2a2 2 0 0 1 2 2v2h-4V6ZM42 14h4v4h-4zM42 22h4v4h-4zM42 30h4v4h-4zM42 38h4v2a2 2 0 0 1-2 2h-2v-4ZM34 38h4v4h-4zM26 38h4v4h-2a2 2 0 0 1-2-2v-2ZM26 30h4v4h-4zM26 22h4v4h-4zM26 14h4v4h-4zM28 6h2v4h-4V8a2 2 0 0 1 2-2ZM34 6h4v4h-4z" />
                <rect x="2" y="6" width="20" height="36" rx="2" />
            </svg>
        );
    },
);
