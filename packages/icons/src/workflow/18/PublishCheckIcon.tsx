import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PublishCheckIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M33.191 1.113 1.8 10.478a.5.5 0 0 0-.08.926l7.92 3.954ZM15.614 22.355 10.08 19.25v7.639a.713.713 0 0 0 1.174.544l3.763-3.169a12.206 12.206 0 0 1 .597-1.909ZM27 14.7a12.3 12.3 0 0 1 2.827.339l5.81-12.676-22.548 14.668 4.378 2.2A12.273 12.273 0 0 1 27 14.7ZM27 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9Zm-2.338 14.312-4.128-4.127a.5.5 0 0 1 0-.707l1.036-1.036a.5.5 0 0 1 .707 0l2.731 2.731 6.106-6.106a.5.5 0 0 1 .707 0l1.043 1.043a.5.5 0 0 1 0 .707l-7.5 7.5a.5.5 0 0 1-.702-.005Z" />
            </svg>
        );
    },
);
