import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PatternIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="4" rx="1" ry="1" width="8" x="4" y="8" />
                <rect height="4" rx="1" ry="1" width="10" x="18" y="8" />
                <rect height="4" rx="1" ry="1" width="8" x="34" y="8" />
                <path d="M15 16a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1ZM31 16a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1Z" />
                <rect height="4" rx="1" ry="1" width="8" x="26" y="18" />
                <rect height="4" rx="1" ry="1" width="8" x="12" y="18" />
                <path d="M9 24a1 1 0 0 1-1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1ZM23 24a1 1 0 0 1-1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1ZM37 24a1 1 0 0 1-1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1Z" />
                <rect height="4" rx="1" ry="1" width="8" x="4" y="26" />
                <rect height="4" rx="1" ry="1" width="10" x="18" y="26" />
                <rect height="4" rx="1" ry="1" width="8" x="34" y="26" />
                <path d="M15 34a1 1 0 0 1-1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1ZM31 34a1 1 0 0 1-1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1Z" />
                <rect height="4" rx="1" ry="1" width="8" x="26" y="36" />
                <rect height="4" rx="1" ry="1" width="8" x="12" y="36" />
                <path d="M9 42a1 1 0 0 1-1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1ZM23 42a1 1 0 0 1-1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1ZM37 42a1 1 0 0 1-1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1Z" />
            </svg>
        );
    },
);
