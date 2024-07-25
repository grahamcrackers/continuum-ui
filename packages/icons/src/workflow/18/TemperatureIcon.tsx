import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TemperatureIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20 20.368V10h-4v10.368a6 6 0 1 0 4 0Z" />
                <path d="M18 1.8A4.2 4.2 0 0 1 22.2 6v12.941l.715.54A8.126 8.126 0 0 1 26.2 26a8.2 8.2 0 1 1-16.4 0 8.126 8.126 0 0 1 3.285-6.519l.715-.54V6A4.2 4.2 0 0 1 18 1.8ZM18 0a6 6 0 0 0-6 6v12.045a10 10 0 1 0 12 0V6a6 6 0 0 0-6-6Z" />
            </svg>
        );
    },
);
