import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DataRefreshIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <ellipse cx="18" cy="7" rx="16" ry="5" />
                <path d="M14.8 30.2v-3.3a9.618 9.618 0 0 1 .116-1.1 13.076 13.076 0 0 1 .371-1.624C10.233 23.846 3.5 22.644 2 20.27V29c0 2.419 5.5 4.436 12.8 4.9ZM27 14.8a12.115 12.115 0 0 1 6.3 1.85l.415-.424.285-.292V10.27c-2.447 3.095-11.064 4-16 4s-14.212-1.168-16-4V17c0 2.56 6.158 4.667 14.094 4.961A12.173 12.173 0 0 1 27 14.8ZM27 33.435a6.212 6.212 0 0 1-4.771-2.123L24.537 29H18v6.55l2.5-2.509A8.744 8.744 0 0 0 27 36a9.3 9.3 0 0 0 9-9h-2.28A6.889 6.889 0 0 1 27 33.435Z" />
                <path d="M33.558 20.958A9.215 9.215 0 0 0 27 18a9.3 9.3 0 0 0-9 9h2.28A6.889 6.889 0 0 1 27 20.565a6.283 6.283 0 0 1 4.871 2.116L29.6 25H36v-6.535Z" />
            </svg>
        );
    },
);
