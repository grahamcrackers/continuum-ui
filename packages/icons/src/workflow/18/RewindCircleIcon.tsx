import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const RewindCircleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18 2A16 16 0 1 1 2 18 16 16 0 0 1 18 2Zm2 19.91 2.861 2.5a1 1 0 0 0 1.659-.753V12.249a1 1 0 0 0-1.659-.753L20 14Zm-3.658 2.5A1 1 0 0 0 18 23.662V12.248a1 1 0 0 0-1.658-.752l-7.383 6.459Z" />
            </svg>
        );
    },
);
