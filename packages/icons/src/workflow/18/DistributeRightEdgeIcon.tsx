import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DistributeRightEdgeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M13.5 0h-1a.5.5 0 0 0-.5.5V6H5a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h7v5.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5ZM31.5 0h-1a.5.5 0 0 0-.5.5V10h-7a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7v9.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5Z" />
            </svg>
        );
    },
);
