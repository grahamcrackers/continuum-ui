import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DistributeRightEdgeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M19 2h-2a1 1 0 0 0-1 1v5H8a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h8v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM43 2h-2a1 1 0 0 0-1 1v11H30a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10v11a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z" />
            </svg>
        );
    },
);
