import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BookmarkSmallIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="m17.022 23.848 6.122 5.988a.5.5 0 0 0 .542.106.5.5 0 0 0 .314-.454V7a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v22.506a.523.523 0 0 0 .306.456.481.481 0 0 0 .542-.1Z" />
                <path d="m17.022 23.848 6.122 5.988a.5.5 0 0 0 .542.106.5.5 0 0 0 .314-.454V7a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v22.506a.523.523 0 0 0 .306.456.481.481 0 0 0 .542-.1Z" />
            </svg>
        );
    },
);
