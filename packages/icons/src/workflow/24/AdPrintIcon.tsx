import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AdPrintIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M47 4H9a1 1 0 0 0-1 1v29a2 2 0 0 1-4 0V9a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v25a6 6 0 0 0 6 6h36a6 6 0 0 0 6-6V5a1 1 0 0 0-1-1Zm-5 32H12V8h32v26a2 2 0 0 1-2 2Z" />
                <path d="M30 12h10v20H30z" />
            </svg>
        );
    },
);
