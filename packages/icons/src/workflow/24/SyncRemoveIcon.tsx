import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SyncRemoveIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M11.9 24.2a11.9 11.9 0 1 0 11.9 11.9 11.9 11.9 0 0 0-11.9-11.9Zm8.132 17.2a.5.5 0 0 1 0 .707l-2.122 2.124a.5.5 0 0 1-.707 0l-5.3-5.3-5.3 5.3a.5.5 0 0 1-.707 0L3.768 42.11a.5.5 0 0 1 0-.707l5.3-5.3-5.3-5.3a.5.5 0 0 1 0-.707l2.122-2.128a.5.5 0 0 1 .707 0l5.3 5.3 5.3-5.3a.5.5 0 0 1 .707 0l2.122 2.121a.5.5 0 0 1 0 .707l-5.3 5.3ZM30 19v-8a1 1 0 0 0-1-1H14V3.207a.5.5 0 0 0-.854-.353L.6 15l6.142 5.946A15.375 15.375 0 0 1 14 20.124V20h15a1 1 0 0 0 1-1Zm4.854-2.146a.5.5 0 0 0-.854.353V24H22.62a15.846 15.846 0 0 1 5.256 10H34v6.793a.5.5 0 0 0 .854.353L47.4 29Z" />
            </svg>
        );
    },
);
