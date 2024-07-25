import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DistributeHorizontalCenterIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M13 6h-3V.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V6H5a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h3v5.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V30h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1ZM31 10h-3V.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V10h-3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3v9.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V26h3a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1Z" />
            </svg>
        );
    },
);
