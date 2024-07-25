import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DistributeVerticalCenterIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M14 10v2H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h11v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2h11a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H34v-2a2 2 0 0 0-2-2H16a2 2 0 0 0-2 2ZM8 30v2H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5v2a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-2h5a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-5v-2a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2Z" />
            </svg>
        );
    },
);
