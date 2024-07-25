import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CommentIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M4 12v18a6 6 0 0 0 6 6h2v9.586a1 1 0 0 0 1.707.707L24 36l13.993-.007a6 6 0 0 0 6.007-6V12a6 6 0 0 0-6-6H10a6 6 0 0 0-6 6Z" />
            </svg>
        );
    },
);
