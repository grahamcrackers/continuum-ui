import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CalendarUnlockedIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M45 32H27.9v-5.647a6.279 6.279 0 0 1 4.955-6.246 6.149 6.149 0 0 1 6.653 3.312 7.516 7.516 0 0 1 .3.8.5.5 0 0 0 .659.307l2.681-1.069a.506.506 0 0 0 .3-.623 9.965 9.965 0 0 0-10.317-6.8C28.094 16.463 24 21.236 24 26.292V32h-1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V33a1 1 0 0 0-1-1Zm-9 8.222V43a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2.778a3 3 0 1 1 4 0Z" />
                <path d="M40 6h-6V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3H14V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3H4a2 2 0 0 0-2 2v26a2 2 0 0 0 2 2h14v-3a4.92 4.92 0 0 1 .12-1H6V10h4v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1h16v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1h4v2.609a13.9 13.9 0 0 1 4 1.933V8a2 2 0 0 0-2-2Z" />
            </svg>
        );
    },
);
