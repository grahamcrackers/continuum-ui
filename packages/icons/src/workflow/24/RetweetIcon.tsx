import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const RetweetIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M14 34V18h3.586a1 1 0 0 0 .707-1.707L10 8l-8.293 8.293A1 1 0 0 0 2.414 18H6v16a8 8 0 0 0 8 8h18l-8-8ZM45.586 32H42V16a8 8 0 0 0-8-8H16l8 8h10v16h-3.586a1 1 0 0 0-.707 1.707L38 42l8.293-8.293A1 1 0 0 0 45.586 32Z" />
            </svg>
        );
    },
);
