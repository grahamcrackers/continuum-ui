import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const RealTimeCustomerProfileIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M18 1a17 17 0 1 0 17 17A17 17 0 0 0 18 1Zm10.982 27.183a10.826 10.826 0 0 0-6.224-3.128 1.307 1.307 0 0 1-1.131-1.311V21.85a1.313 1.313 0 0 1 .333-.844 9.99 9.99 0 0 0 2.28-6.236c0-4.72-2.508-7.36-6.287-7.36s-6.358 2.737-6.358 7.36a10.103 10.103 0 0 0 2.383 6.238 1.31 1.31 0 0 1 .334.845v1.883a1.3 1.3 0 0 1-1.14 1.31 10.863 10.863 0 0 0-6.24 3.042 15 15 0 1 1 22.05.094Z" />
            </svg>
        );
    },
);
