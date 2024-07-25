import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ArrowLeftIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M22 16h22a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H22v8.519a1 1 0 0 1-1.707.707L3.066 24 20.292 6.774A1 1 0 0 1 22 7.481Z" />
            </svg>
        );
    },
);
