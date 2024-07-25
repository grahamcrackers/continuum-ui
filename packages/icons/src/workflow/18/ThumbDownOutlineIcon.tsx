import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ThumbDownOutlineIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="36"
                viewBox="0 0 36 36"
                width="36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M25.458 6ZM32.554 19.7 28.57 8.424A4.636 4.636 0 0 0 24.444 6H10a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-.476c2.545 1.174 7.177 4.83 7.64 9.312A3.327 3.327 0 0 0 20.921 34c1.626 0 3.1-1.814 3.173-3.937a21.477 21.477 0 0 0-.8-6.081l6.55.01a3 3 0 0 0 2.71-4.292ZM29.847 22h-9.5a15.051 15.051 0 0 1 1.746 8.063c-.052 1.2-.563 1.932-1.173 1.937a1.374 1.374 0 0 1-1.281-1.2c-.49-5.873-6.773-10.245-9.64-11.4V8l14.991-.02a1.842 1.842 0 0 1 1.742 1.232l4.017 11.356A1 1 0 0 1 29.847 22Z" />
            </svg>
        );
    },
);
