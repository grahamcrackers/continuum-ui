import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TransferToPlatformIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M8.157 21.233A6.674 6.674 0 0 0 15.867 16h.944l3.035 5.312 1.69-2.957-2.257-3.95a2.128 2.128 0 0 0-1.848-1.072h-1.565a6.67 6.67 0 1 0-7.71 7.9Zm31.686 5.534A6.674 6.674 0 0 0 32.133 32h-2.8l-3.035-5.312-1.69 2.957 2.059 3.603.213.374a2.074 2.074 0 0 0 1.801 1.045h3.453a6.67 6.67 0 1 0 7.71-7.9Zm-1.176 10.566a4 4 0 1 1 4-4 4 4 0 0 1-4 4ZM29.333 16h2.8a6.667 6.667 0 1 0 0-2.667h-3.452a2.074 2.074 0 0 0-1.8 1.045L16.81 32h-.945a6.667 6.667 0 1 0 0 2.667h1.565a2.128 2.128 0 0 0 1.848-1.073Zm9.334-5.333a4 4 0 1 1-4 4 4 4 0 0 1 4-4Z" />
            </svg>
        );
    },
);
