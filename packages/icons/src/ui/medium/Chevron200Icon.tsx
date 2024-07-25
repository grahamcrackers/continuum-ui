import * as React from "react";

import { iconVariants } from "../../helpers";
import type { IconProps } from "../../helpers";

export const Chevron200Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 12 12"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M9.034 5.356 4.343.663a.911.911 0 0 0-1.29 1.289L7.102 6l-4.047 4.047a.911.911 0 1 0 1.289 1.29l4.691-4.692a.91.91 0 0 0 0-1.29z" />
            </svg>
        );
    },
);
