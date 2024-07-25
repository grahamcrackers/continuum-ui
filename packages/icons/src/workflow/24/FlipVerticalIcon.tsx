import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FlipVerticalIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="4" rx="1" ry="1" width="4" x="2" y="22" />
                <rect height="4" rx="1" ry="1" width="4" x="10" y="22" />
                <rect height="4" rx="1" ry="1" width="4" x="18" y="22" />
                <rect height="4" rx="1" ry="1" width="4" x="26" y="22" />
                <rect height="4" rx="1" ry="1" width="4" x="34" y="22" />
                <rect height="4" rx="1" ry="1" width="4" x="42" y="22" />
                <path d="M9.257 44h29.486a1 1 0 0 0 .669-1.743L24.669 28.988a1 1 0 0 0-1.338 0L8.588 42.257A1 1 0 0 0 9.257 44ZM31.968 7.6 24 14.771 16.032 7.6ZM38.743 4H9.257a1 1 0 0 0-.669 1.743l14.743 13.269a1 1 0 0 0 1.338 0L39.412 5.743A1 1 0 0 0 38.743 4Z" />
            </svg>
        );
    },
);
