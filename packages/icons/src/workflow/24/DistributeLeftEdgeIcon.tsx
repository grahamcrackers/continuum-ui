import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DistributeLeftEdgeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M42 14H32V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v42a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V34h10a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2ZM18 8h-8V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v42a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-5h8a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Z" />
            </svg>
        );
    },
);
