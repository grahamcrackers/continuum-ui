import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const StepBackwardCircleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M4.1 24A19.9 19.9 0 1 0 24 4.1 19.9 19.9 0 0 0 4.1 24ZM28 15a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1ZM9.8 24.813a1 1 0 0 1 0-1.626l12.619-9.017a1 1 0 0 1 1.581.813v18.034a1 1 0 0 1-1.581.813Z" />
            </svg>
        );
    },
);
