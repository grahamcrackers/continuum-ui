import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SegmentsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M14 18h32a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H14a2 2 0 0 0-2 2v2H8a4 4 0 0 0-4 4v6.367a5.966 5.966 0 0 0 0 11.266V36a4 4 0 0 0 4 4h4v2a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V32a2 2 0 0 0-2-2H14a2 2 0 0 0-2 2v4H8v-6.367a5.966 5.966 0 0 0 0-11.266V12h4v4a2 2 0 0 0 2 2Zm-5 6a3 3 0 1 1-3-3 3 3 0 0 1 3 3Z" />
            </svg>
        );
    },
);
