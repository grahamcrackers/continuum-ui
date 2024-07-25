import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AEMScreensIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M16 2H2a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Zm-1 29H3V5h12ZM44 2H22a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h1.51a10.18 10.18 0 0 1 1.709-2.086A8.352 8.352 0 0 1 24.43 16H23V5h20v11h-3.1a8.234 8.234 0 0 1-.89 2.105A10.068 10.068 0 0 1 40.476 20H44a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM28.158 14.008a4.008 4.008 0 1 1 4.008 4.007 4.008 4.008 0 0 1-4.008-4.007ZM38 25.243v7.305a1.106 1.106 0 0 1-1.09 1.12h-1.092l-1.09 11.211A1.106 1.106 0 0 1 33.635 46h-3.272a1.106 1.106 0 0 1-1.091-1.121l-1.091-11.21H27.09A1.106 1.106 0 0 1 26 32.548v-7.305a5.882 5.882 0 0 1 5.8-5.96h.4a5.882 5.882 0 0 1 5.8 5.96Z" />
            </svg>
        );
    },
);
