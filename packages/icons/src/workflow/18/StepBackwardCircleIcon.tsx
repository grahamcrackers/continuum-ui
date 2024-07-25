import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const StepBackwardCircleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M2 18A16 16 0 1 0 18 2 16 16 0 0 0 2 18Zm20-7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1ZM7.6 17.219l8.775-7.019a1 1 0 0 1 1.625.783v14.034a1 1 0 0 1-1.625.781L7.6 18.781a1 1 0 0 1 0-1.562Z" />
            </svg>
        );
    },
);
