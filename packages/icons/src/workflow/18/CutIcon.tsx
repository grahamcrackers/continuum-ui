import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CutIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M29.912 22.12c0-.007.035-.028.026-.028a8.481 8.481 0 0 1-7.138-4.018c-.017-.028-.046-.047-.065-.074.019-.027.048-.046.065-.074a8.481 8.481 0 0 1 7.142-4.018c.009 0-.023-.021-.026-.028a5.917 5.917 0 1 0-3.93-1.588l-6.47 3.444-12.6-6.7a4 4 0 0 0-3.8.023L.822 10.313 15.26 18 .822 25.687l2.292 1.255a4 4 0 0 0 3.8.023l12.6-6.7 6.47 3.444a5.892 5.892 0 1 0 3.93-1.588Zm.367-18.038a3.933 3.933 0 1 1-4.2 3.641 3.932 3.932 0 0 1 4.2-3.641Zm0 27.836a3.933 3.933 0 1 1 3.641-4.2 3.933 3.933 0 0 1-3.641 4.2Z" />
            </svg>
        );
    },
);
