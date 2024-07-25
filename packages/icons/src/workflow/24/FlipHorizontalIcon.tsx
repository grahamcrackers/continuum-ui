import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FlipHorizontalIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="4" rx="1" ry="1" width="4" x="22" y="42" />
                <rect height="4" rx="1" ry="1" width="4" x="22" y="34" />
                <rect height="4" rx="1" ry="1" width="4" x="22" y="26" />
                <rect height="4" rx="1" ry="1" width="4" x="22" y="18" />
                <rect height="4" rx="1" ry="1" width="4" x="22" y="10" />
                <rect height="4" rx="1" ry="1" width="4" x="22" y="2" />
                <path d="M44 38.743V9.257a1 1 0 0 0-1.743-.669L28.988 23.331a1 1 0 0 0 0 1.338l13.269 14.743A1 1 0 0 0 44 38.743ZM7.6 16.033 14.771 24 7.6 31.967ZM5.008 8.255A1 1 0 0 0 4 9.257v29.486a1 1 0 0 0 1.008 1 .977.977 0 0 0 .735-.333l13.269-14.741a1 1 0 0 0 0-1.338L5.743 8.588a.977.977 0 0 0-.735-.333Z" />
            </svg>
        );
    },
);
