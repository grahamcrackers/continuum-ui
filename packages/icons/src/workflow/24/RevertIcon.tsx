import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const RevertIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M4.5 28H18a1 1 0 0 0 1-1.007.978.978 0 0 0-.295-.7l-4.536-4.536a14.067 14.067 0 0 1 11.585-6.013A12.27 12.27 0 0 1 37.967 27.1a.988.988 0 0 0 1 .9l4.011-.008a.992.992 0 0 0 1-1.029A18.268 18.268 0 0 0 25.756 9.744a19.76 19.76 0 0 0-15.877 7.721l-4.172-4.172a.978.978 0 0 0-.7-.295A1 1 0 0 0 4 14v13.5a.5.5 0 0 0 .5.5Z" />
                <rect height="4" rx="1" ry="1" width="40" x="4" y="34" />
            </svg>
        );
    },
);
