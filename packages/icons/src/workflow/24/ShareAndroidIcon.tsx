import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ShareAndroidIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M35.95 32.05a5.931 5.931 0 0 0-4.2 1.735l-14.068-8.207a5.82 5.82 0 0 0 0-3.156l14.069-8.207a6 6 0 1 0-1.52-2.587l-14.047 8.2a5.95 5.95 0 1 0 0 8.354l14.047 8.2a5.948 5.948 0 1 0 5.719-4.332Z" />
            </svg>
        );
    },
);
