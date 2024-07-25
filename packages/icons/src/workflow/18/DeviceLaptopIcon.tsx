import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DeviceLaptopIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M35.948 30.684 32 20V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v15L.052 30.684A1.011 1.011 0 0 0 0 31a1 1 0 0 0 1 1h34a1 1 0 0 0 1-1 1.011 1.011 0 0 0-.052-.316ZM12 30l1.333-4h9.334L24 30Zm18-10H6V6h24Z" />
            </svg>
        );
    },
);
