import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DownloadIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M33 24h-2a1 1 0 0 0-1 1v5H6v-5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1Z" />
                <path d="M17.65 26.856a.5.5 0 0 0 .7 0l7.446-7.525a.785.785 0 0 0 .204-.526.8.8 0 0 0-.802-.805H20V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v15h-5.198a.8.8 0 0 0-.802.805.785.785 0 0 0 .204.526Z" />
            </svg>
        );
    },
);
