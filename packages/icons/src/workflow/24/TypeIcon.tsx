import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TypeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M32 6h5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-5.343a4 4 0 0 0-2.828 1.172L24 8l-4.828-4.828A4 4 0 0 0 16.343 2H11a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5l6 6v18h-7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h7v2l-6 6h-5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5.343a4 4 0 0 0 2.828-1.172L24 40l4.828 4.828A4 4 0 0 0 31.657 46H37a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-5l-6-6v-2h7a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-7V12Z" />
            </svg>
        );
    },
);
