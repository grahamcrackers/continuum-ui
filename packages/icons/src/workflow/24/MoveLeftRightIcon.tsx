import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const MoveLeftRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M9.146 14.854a.5.5 0 0 1 .854.353V20h6v8h-6v4.793a.5.5 0 0 1-.854.353L0 24ZM36.854 14.854a.5.5 0 0 0-.854.353V20h-6v8h6v4.793a.5.5 0 0 0 .854.353L46 24Z" />
                <rect height="40" rx="1" ry="1" width="6" x="20" y="4" />
            </svg>
        );
    },
);
