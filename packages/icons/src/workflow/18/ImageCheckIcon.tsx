import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ImageCheckIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <circle cx="23.8" cy="12.6" r="2.5" />
                <path d="M14.7 27a12.238 12.238 0 0 1 1.262-5.4c-2.108-2.358-4.306-5.6-6.178-5.6C7.113 16 2 24 2 24V6h32v10.893a12.279 12.279 0 0 1 2 1.743V5a1.068 1.068 0 0 0-1.125-1H1.125A1.068 1.068 0 0 0 0 5v26a1.069 1.069 0 0 0 1.125 1h14.644a12.244 12.244 0 0 1-1.069-5Z" />
                <path d="M27 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9Zm-2.338 14.312-4.128-4.128a.5.5 0 0 1 0-.707l1.036-1.036a.5.5 0 0 1 .707 0l2.731 2.731 6.106-6.106a.5.5 0 0 1 .707 0l1.043 1.043a.5.5 0 0 1 0 .707l-7.5 7.5a.5.5 0 0 1-.702-.004Z" />
            </svg>
        );
    },
);
