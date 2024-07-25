import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DownloadIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M40 33v7H8v-7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2v-9a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1Z" />
                <path d="m24.354 32.854 9.351-9.147A1 1 0 0 0 33 22h-5V5a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v17h-5a1 1 0 0 0-.707 1.707l9.353 9.147a.5.5 0 0 0 .708 0Z" />
            </svg>
        );
    },
);
