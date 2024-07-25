import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PendingIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M26 22.086V11a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v12.586a1 1 0 0 0 .293.707l6.3 6.3a1 1 0 0 0 1.414 0l1.336-1.336a1 1 0 0 0 0-1.414l-5.054-5.054a1 1 0 0 1-.289-.703Z" />
                <path d="M40.063 26A16.193 16.193 0 1 1 22 7.937V4.1A20 20 0 1 0 43.9 26ZM32.171 5.759A19.839 19.839 0 0 0 26 4.1v3.837a16.063 16.063 0 0 1 4.261 1.148ZM37.026 14.419l3.344-1.87a20.117 20.117 0 0 0-4.726-4.8l-1.917 3.338a16.4 16.4 0 0 1 3.299 3.332ZM38.975 17.914A15.972 15.972 0 0 1 40.063 22H43.9a19.827 19.827 0 0 0-1.566-5.965Z" />
            </svg>
        );
    },
);
