import * as React from "react";

import { iconVariants } from "../../helpers";
import type { IconProps } from "../../helpers";

export const CornerTriangle75Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 5 5"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M4.78.558a.22.22 0 0 0-.157.065l-4 4a.222.222 0 0 0 .157.379h4a.22.22 0 0 0 .222-.222v-4A.22.22 0 0 0 4.78.558" />
            </svg>
        );
    },
);
