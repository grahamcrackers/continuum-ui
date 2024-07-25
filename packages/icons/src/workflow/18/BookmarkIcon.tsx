import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BookmarkIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M15.071 34.724 13 31.373l-2.071 3.351a.5.5 0 0 1-.929-.257V24h6v10.467a.5.5 0 0 1-.929.257Z" />
                <path d="M8 27.443A3.987 3.987 0 0 1 9.995 20h10.523a1 1 0 0 0 .8-.4l11.1-14.8a.5.5 0 0 0-.4-.8H16.025a1 1 0 0 0-.8.4L3.522 19.328h.008A7.942 7.942 0 0 0 8 31.716ZM32.018 16h-3.236l-9 12H18v4h2.518a1 1 0 0 0 .8-.4l11.1-14.8a.5.5 0 0 0-.4-.8Z" />
            </svg>
        );
    },
);
