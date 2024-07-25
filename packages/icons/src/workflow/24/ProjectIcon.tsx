import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ProjectIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18.1 4.8a2 2 0 0 0-1.6-.8H6a2 2 0 0 0-2 2v4h18ZM42 14H4v26a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2ZM14 37a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V19a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Zm8 0a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V27a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Zm8 0a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Zm8 0a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Z" />
            </svg>
        );
    },
);
