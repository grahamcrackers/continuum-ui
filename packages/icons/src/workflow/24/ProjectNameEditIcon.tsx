import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ProjectNameEditIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M44 24H26a2 2 0 0 0-2 2v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h4v14h-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1V28h4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-5a2 2 0 0 0-2-2Z" />
                <path d="M6 8h36v12h4V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h17v-4H6Z" />
            </svg>
        );
    },
);
