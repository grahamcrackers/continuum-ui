import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PendingIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20 16.086V7a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v10.586a1 1 0 0 0 .293.707L21.9 23.9a1 1 0 0 0 1.415 0l1.335-1.335a1 1 0 0 0 0-1.415l-4.357-4.357a1 1 0 0 1-.293-.707ZM26.485 6.9a14.163 14.163 0 0 1 2.626 2.6l1.743-1a16.173 16.173 0 0 0-3.365-3.336ZM33.893 16.2a15.964 15.964 0 0 0-1.227-4.589l-1.742 1.006a13.976 13.976 0 0 1 .947 3.583ZM24.376 3.357A15.986 15.986 0 0 0 19.8 2.111v2.023a14.114 14.114 0 0 1 3.572.962Z" />
                <path d="M31.872 19.8A13.994 13.994 0 1 1 16.2 4.128V2.107A16 16 0 1 0 33.892 19.8Z" />
            </svg>
        );
    },
);
