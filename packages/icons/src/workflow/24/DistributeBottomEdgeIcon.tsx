import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DistributeBottomEdgeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M14 6v10H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h42a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H34V6a2 2 0 0 0-2-2H16a2 2 0 0 0-2 2ZM8 30v8H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h42a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-5v-8a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2Z" />
            </svg>
        );
    },
);
