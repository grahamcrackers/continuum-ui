import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const RewindIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M6 24 24.331 7.5A1 1 0 0 1 26 8.246v31.509a1 1 0 0 1-1.669.743ZM30 13.2l6.331-5.7A1 1 0 0 1 38 8.246v31.509a1 1 0 0 1-1.669.743L30 34.8Z" />
            </svg>
        );
    },
);
