import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const RewindCircleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24.1 4.2A19.9 19.9 0 1 1 4.2 24.1 19.9 19.9 0 0 1 24.1 4.2Zm3.614 25.4 4.628 4.049A1 1 0 0 0 34 32.9V15.3a1 1 0 0 0-1.658-.753L27.714 18.6Zm-5.372 4.049A1 1 0 0 0 24 32.9V15.3a1 1 0 0 0-1.658-.753L11.429 24.1Z" />
            </svg>
        );
    },
);
