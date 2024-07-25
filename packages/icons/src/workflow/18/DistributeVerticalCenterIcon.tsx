import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DistributeVerticalCenterIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M6 23v3H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H6v3a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-3h5.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H30v-3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1ZM10 5v3H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H10v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3h9.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H26V5a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1Z" />
            </svg>
        );
    },
);
