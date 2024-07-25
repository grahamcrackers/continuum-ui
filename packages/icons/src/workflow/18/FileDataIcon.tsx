import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FileDataIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M16 2v10H6L16 2z" />
                <path d="M20 34V17.861c0-3.3 4.666-4.8 9-4.8.332 0 .666.025 1 .043V3a1 1 0 0 0-1-1H18v11a1 1 0 0 1-1 1H6v19a1 1 0 0 0 1 1Z" />
                <path d="M29 28c-3.866 0-7-1.253-7-2.8v-4c0 1.546 3.134 3.066 7 3.066s7-1.52 7-3.066v4c0 1.547-3.134 2.8-7 2.8Zm7 5.179v-5.158c0 1.546-3.134 2.8-7 2.8s-7-1.253-7-2.8v5.159c0 1.546 3.134 2.8 7 2.8s7-1.254 7-2.801Zm0-15.068c0-1.546-3.195-2.626-7.061-2.626S22 16.565 22 18.111s3.134 2.8 7 2.8 7-1.253 7-2.8Z" />
            </svg>
        );
    },
);
