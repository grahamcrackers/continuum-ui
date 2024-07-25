import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CrosshairsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18 15.8a2.2 2.2 0 1 0 2.2 2.2 2.2 2.2 0 0 0-2.2-2.2Z" />
                <path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm2 29.552V24h-4v7.552A13.7 13.7 0 0 1 4.448 20H12v-4H4.448A13.7 13.7 0 0 1 16 4.448V12h4V4.448A13.7 13.7 0 0 1 31.552 16H24v4h7.552A13.7 13.7 0 0 1 20 31.552Z" />
            </svg>
        );
    },
);
