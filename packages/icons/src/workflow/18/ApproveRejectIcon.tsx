import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ApproveRejectIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24 12a12 12 0 0 0-12 12 11.831 11.831 0 0 0 12 11.8A11.662 11.662 0 0 0 35.8 24 11.831 11.831 0 0 0 24 12Zm7.242 7.907-7.224 9.434a1.206 1.206 0 0 1-.875.461h-.073a1.2 1.2 0 0 1-.849-.351l-4.837-4.847a1.2 1.2 0 0 1 0-1.7l1.327-1.325a1.2 1.2 0 0 1 1.7 0l2.4 2.4L27.89 17.3a1.2 1.2 0 0 1 1.686-.21l1.455 1.133a1.2 1.2 0 0 1 .211 1.684Z" />
                <path d="M11.521 14H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h11.26a15.9 15.9 0 0 1 7.055-1.965A11.818 11.818 0 0 0 12 .2 11.662 11.662 0 0 0 .2 12a11.819 11.819 0 0 0 7.834 11.315A15.921 15.921 0 0 1 11.521 14Z" />
            </svg>
        );
    },
);
