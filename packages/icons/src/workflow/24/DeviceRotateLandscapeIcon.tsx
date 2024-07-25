import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DeviceRotateLandscapeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18.7 40H10V8h18v13.417a15.836 15.836 0 0 1 4-1.063V6a4 4 0 0 0-4-4H10a4 4 0 0 0-4 4v36a4 4 0 0 0 4 4h11.671a15.835 15.835 0 0 1-2.971-6ZM17 4h4a1.04 1.04 0 0 1 1 1 1.04 1.04 0 0 1-1 1h-4a1 1 0 0 1 0-2Z" />
                <path d="M45.764 25.367a.786.786 0 0 0 .236-.56.8.8 0 0 0-.8-.807h-8.7a.5.5 0 0 0-.5.5v8.7a.8.8 0 0 0 .806.8.785.785 0 0 0 .56-.236l2.875-2.875a8.063 8.063 0 0 1-4.3 12.985 8.091 8.091 0 0 1-4.727-15.452A1.147 1.147 0 0 0 32 27.357V25.28a.8.8 0 0 0-.979-.79 11.891 11.891 0 0 0-8.89 12.382A12.049 12.049 0 0 0 33.823 47.9 11.9 11.9 0 0 0 45.9 36a11.744 11.744 0 0 0-2.974-7.8Z" />
            </svg>
        );
    },
);
