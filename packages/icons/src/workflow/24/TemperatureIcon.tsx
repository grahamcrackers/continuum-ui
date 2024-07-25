import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TemperatureIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M26 26.8V17a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v9.8a7.5 7.5 0 1 0 4 0Z" />
                <path d="M32 22.517V8a8 8 0 0 0-16 0v14.517a14 14 0 1 0 16 0ZM24 44.1a10.1 10.1 0 0 1-4-19.369V8a4 4 0 0 1 8 0v16.731A10.1 10.1 0 0 1 24 44.1Z" />
            </svg>
        );
    },
);
