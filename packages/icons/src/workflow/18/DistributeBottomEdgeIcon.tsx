import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DistributeBottomEdgeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M6 22.926V30H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h35a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H30v-7.074a.927.927 0 0 0-.926-.926H6.926a.926.926 0 0 0-.926.926ZM10 5v7H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h35a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H26V5a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1Z" />
            </svg>
        );
    },
);
