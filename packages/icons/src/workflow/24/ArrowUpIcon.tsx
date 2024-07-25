import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ArrowUpIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M32 22v22a2 2 0 0 1-2 2H18a2 2 0 0 1-2-2V22H7.481a1 1 0 0 1-.707-1.707L24 3.067l17.226 17.226A1 1 0 0 1 40.519 22Z" />
            </svg>
        );
    },
);
