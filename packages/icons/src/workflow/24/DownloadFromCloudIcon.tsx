import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DownloadFromCloudIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M22 38h-6.2a.8.8 0 0 0-.8.8.782.782 0 0 0 .2.526l8.445 8.525a.5.5 0 0 0 .7 0l8.455-8.52a.782.782 0 0 0 .2-.526.8.8 0 0 0-.8-.8H26V32h-4ZM37.5 16.984a7.392 7.392 0 0 0-.846.048 9.5 9.5 0 1 0-18.575-3.775A8 8 0 0 0 8.27 23.05a4.5 4.5 0 1 0-.77 8.934L22 32V20.984a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1V32l11.5-.016a7.5 7.5 0 0 0 0-15Z" />
            </svg>
        );
    },
);
