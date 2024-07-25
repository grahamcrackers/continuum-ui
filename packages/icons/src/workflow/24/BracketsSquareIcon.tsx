import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BracketsSquareIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18 5V3a1 1 0 0 0-1-1h-7a2 2 0 0 0-2 2v40a2 2 0 0 0 2 2h7a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-3V6h3a1 1 0 0 0 1-1ZM30 3v2a1 1 0 0 0 1 1h3v36h-3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h7a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7a1 1 0 0 0-1 1Z" />
            </svg>
        );
    },
);
