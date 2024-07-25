import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ArrowUpRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M26.2 18.284 12.181 32.3a1 1 0 0 1-1.414 0L3.7 25.233a1 1 0 0 1 0-1.414L17.716 9.8l-4.944-4.946A.5.5 0 0 1 13.125 4H32v18.875a.5.5 0 0 1-.854.353Z" />
            </svg>
        );
    },
);
