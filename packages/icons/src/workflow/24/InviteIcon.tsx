import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const InviteIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M25.376 40.89a18.453 18.453 0 0 1-18.275-6.303 15.594 15.594 0 0 1 7.724-3.497c1.902-.166 1.932-1.695 1.932-3.6a17.347 17.347 0 0 1-4.075-10.34c0-6.26 3.562-10.433 8.69-10.433s8.691 4.174 8.691 10.434a17.347 17.347 0 0 1-4.074 10.338c0 1.906.03 3.435 1.931 3.6A14.853 14.853 0 0 1 33 32.81V30a5.006 5.006 0 0 1 5-5h1a4.963 4.963 0 0 1 3.346 1.311A21.334 21.334 0 1 0 27.24 43.163a5.023 5.023 0 0 1-1.864-2.274Z" />
                <path d="M47 37h-7v-7a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v7h-7a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h7v7a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-7h7a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1Z" />
            </svg>
        );
    },
);
