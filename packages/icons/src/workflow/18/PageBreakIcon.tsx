import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PageBreakIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20 14v10h10L20 14zM6 11a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V2H6Z" />
                <path d="M19 26a1 1 0 0 1-1-1V14H7a1 1 0 0 0-1 1v19h24v-8Z" />
            </svg>
        );
    },
);
