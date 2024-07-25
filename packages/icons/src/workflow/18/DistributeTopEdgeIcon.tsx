import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DistributeTopEdgeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M0 22.5v1a.5.5 0 0 0 .5.5H6v7a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-7h5.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5ZM0 4.5v1a.5.5 0 0 0 .5.5H10v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6h9.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5Z" />
            </svg>
        );
    },
);
