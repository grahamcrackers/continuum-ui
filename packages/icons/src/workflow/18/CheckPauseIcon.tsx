import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CheckPauseIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m23.1 15.343 6.391-8.215a1 1 0 0 0-.175-1.4l-1.459-1.136a1 1 0 0 0-1.4.175L12.822 22.283l-6.647-6.612a1 1 0 0 0-1.414 0L3.437 17a1 1 0 0 0 0 1.415l8.926 8.9a1 1 0 0 0 1.5-.093l.888-1.142A12.294 12.294 0 0 1 23.1 15.343Z" />
                <path d="M27 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9Zm-1 13.474h-2.632v-9.148H26Zm4.632 0H28v-9.148h2.632Z" />
            </svg>
        );
    },
);
