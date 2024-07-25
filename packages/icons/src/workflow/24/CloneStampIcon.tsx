import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CloneStampIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M27.3 28.067a36 36 0 0 1-.959-6.33 12.009 12.009 0 0 1 .761-3.6c2.969-1.061 4.52-3.8 4.52-7.026A7.5 7.5 0 0 0 24 3.612a7.479 7.479 0 0 0-7.6 7.5c0 3.219 1.534 5.957 4.5 7.021a12.6 12.6 0 0 1 .775 3.6 37.657 37.657 0 0 1-.968 6.33c-4.447.222-11.794 2.187-14.8 3.229A2.81 2.81 0 0 0 4 33.948v3.039a1 1 0 0 0 1 1h38a1 1 0 0 0 1-1v-3.038a2.81 2.81 0 0 0-1.9-2.649c-3.012-1.047-10.354-3.012-14.8-3.233Z" />
                <rect height="4" rx="1" ry="1" width="36" x="6" y="40" />
            </svg>
        );
    },
);
