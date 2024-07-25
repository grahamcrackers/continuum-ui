import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TaskListIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M2 3v28a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1Zm30 27H4V4h28Z" />
                <path d="M9.55 15.917a1 1 0 0 1-.679-.266l-2.077-1.917a1 1 0 1 1 1.352-1.475l.005.005 1.311 1.211 4.28-5.039a1.002 1.002 0 0 1 1.53 1.294l-.006.006-4.954 5.833a1 1 0 0 1-.7.351ZM9.55 25.917a1 1 0 0 1-.679-.266l-2.077-1.917a1 1 0 0 1 1.357-1.47l1.311 1.211 4.28-5.039a1.002 1.002 0 0 1 1.53 1.293l-.006.007-4.954 5.833a1 1 0 0 1-.7.351Z" />
                <rect x="18" y="10" width="10" height="4" rx=".5" />
                <rect x="18" y="20" width="10" height="4" rx=".5" />
            </svg>
        );
    },
);
