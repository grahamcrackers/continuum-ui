import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ArchiveRemoveIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="8" rx="2" ry="2" width="40" y="4" />
                <path d="M36 24.1a11.85 11.85 0 1 0 0 23.7 11.85 11.85 0 0 0 0-23.7Zm8 13.4a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 .5.5Z" />
                <path d="M13 28a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1.275a15.806 15.806 0 0 1 8-2.175V16H4v18a2 2 0 0 0 2 2h14.1a15.806 15.806 0 0 1 2.175-8Z" />
            </svg>
        );
    },
);
