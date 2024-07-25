import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ImageSearchIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m35.634 33.866-5.168-5.168a8.02 8.02 0 1 0-1.768 1.768l5.168 5.168a1.25 1.25 0 0 0 1.768-1.768ZM18 24a6 6 0 1 1 6 6 6 6 0 0 1-6-6Zm-1.227-6.883-5.5-5.5a2 2 0 0 0-2.829-.001L2 18.058V4h28v12.045a10.01 10.01 0 0 1 2 2.01V3a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h13.202a9.946 9.946 0 0 1 2.571-8.883ZM22 10.051a2.7 2.7 0 1 0 2.7-2.7 2.7 2.7 0 0 0-2.7 2.7Z" />
            </svg>
        );
    },
);
