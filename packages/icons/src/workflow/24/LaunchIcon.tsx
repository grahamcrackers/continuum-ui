import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const LaunchIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M44.751 2.461a42.443 42.443 0 0 0-31.035 26.416.638.638 0 0 0 .153.665l4.585 4.586a.64.64 0 0 0 .662.154c2.895-.982 21.354-8.114 26.419-31.038a.665.665 0 0 0-.784-.783ZM11.53 25.4H3.1a.641.641 0 0 1-.562-.957C4.471 21.077 11.68 9.968 22.592 9.968 20.06 12.5 11.731 23.474 11.53 25.4ZM22.592 36.464v8.443a.64.64 0 0 0 .952.564c3.364-1.9 14.482-9.015 14.482-20.068-2.532 2.532-13.505 10.86-15.434 11.061Z" />
            </svg>
        );
    },
);
