import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TextStrokeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M25 32H11a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h3V10h-4v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h26a1 1 0 0 1 1 1v7.973a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V10h-4v16h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1Zm-13-4v2h12v-2h-4V8h8v4h2V5.96H6V12h2V8h8v20ZM6 5v1Z" />
            </svg>
        );
    },
);
