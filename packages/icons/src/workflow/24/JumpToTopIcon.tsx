import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const JumpToTopIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M30 30v12a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V30H9.481a1 1 0 0 1-.707-1.707L24 12.8l15.226 15.493A1 1 0 0 1 38.519 30Z" />
                <rect height="4" rx=".5" ry=".5" width="48" y="4" />
            </svg>
        );
    },
);
