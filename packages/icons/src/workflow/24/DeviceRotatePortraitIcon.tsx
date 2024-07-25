import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DeviceRotatePortraitIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M45.764 25.367a.786.786 0 0 0 .236-.56.8.8 0 0 0-.8-.807h-8.7a.5.5 0 0 0-.5.5v8.7a.8.8 0 0 0 .806.8.785.785 0 0 0 .56-.236l2.875-2.875a8.063 8.063 0 0 1-4.3 12.985 8.091 8.091 0 0 1-4.727-15.452A1.147 1.147 0 0 0 32 27.357V25.28a.8.8 0 0 0-.979-.79 11.891 11.891 0 0 0-8.89 12.382A12.049 12.049 0 0 0 33.823 47.9 11.9 11.9 0 0 0 45.9 36a11.744 11.744 0 0 0-2.974-7.8Z" />
                <path d="M17.046 30H8V12h32v8h6v-8a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h10.117a17.91 17.91 0 0 1 .929-4ZM6 23a1 1 0 0 1-2 0v-4a1.04 1.04 0 0 1 1-1 1.04 1.04 0 0 1 1 1Z" />
            </svg>
        );
    },
);
