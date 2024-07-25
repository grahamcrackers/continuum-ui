import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DataUnavailableIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <ellipse cx="18" cy="7" rx="16" ry="5" />
                <path d="M14.7 27a12.3 12.3 0 0 1 .342-2.84C10.02 23.808 3.473 22.605 2 20.27V29c0 2.643 6.568 4.8 14.879 4.982A12.236 12.236 0 0 1 14.7 27ZM27 14.7a12.234 12.234 0 0 1 7 2.192V10.27c-2.447 3.095-11.064 4-16 4s-14.212-1.168-16-4V17c0 2.527 6 4.61 13.794 4.947A12.293 12.293 0 0 1 27 14.7Z" />
                <path d="M27 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9ZM20 27a6.934 6.934 0 0 1 1.475-4.252l9.777 9.777A6.966 6.966 0 0 1 20 27Zm12.525 4.252-9.777-9.777a6.966 6.966 0 0 1 9.777 9.777Z" />
            </svg>
        );
    },
);
