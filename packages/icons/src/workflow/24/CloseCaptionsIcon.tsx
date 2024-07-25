import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CloseCaptionsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M42 8H6a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h36a6 6 0 0 0 6-6V14a6 6 0 0 0-6-6ZM22.217 18.149a1.082 1.082 0 0 1-.492.954l-.432.266-.611-.243a7.928 7.928 0 0 0-3.123-.5 4.961 4.961 0 0 0-5.36 5.335c0 5.129 4.51 5.389 5.415 5.389a8.766 8.766 0 0 0 3.037-.41l.412-.145.509.218a1.049 1.049 0 0 1 .481.921v2.417a1.245 1.245 0 0 1-.76 1.2 12.83 12.83 0 0 1-4.086.555C11 34.1 6.984 30.152 6.984 24.041c0-6.066 4.273-10.141 10.63-10.141a10.114 10.114 0 0 1 3.9.538 1.212 1.212 0 0 1 .707 1.132Zm18 0a1.082 1.082 0 0 1-.492.954l-.432.266-.611-.243a7.928 7.928 0 0 0-3.123-.5 4.961 4.961 0 0 0-5.36 5.335c0 5.129 4.51 5.389 5.415 5.389a8.766 8.766 0 0 0 3.037-.41l.412-.145.509.218a1.049 1.049 0 0 1 .481.921v2.417a1.245 1.245 0 0 1-.76 1.2 12.83 12.83 0 0 1-4.086.555c-6.21 0-10.223-3.948-10.223-10.059 0-6.066 4.273-10.141 10.63-10.141a10.114 10.114 0 0 1 3.9.538 1.212 1.212 0 0 1 .707 1.132Z" />
            </svg>
        );
    },
);
