import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const UserCheckedOutIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M36 24a12 12 0 1 0 12 12 12 12 0 0 0-12-12Zm6 14.48a.594.594 0 0 1-1.015.42l-2.528-2.529-5.336 5.336a1 1 0 0 1-1.414 0l-1.414-1.414a1 1 0 0 1 0-1.414l5.336-5.336-2.529-2.528A.594.594 0 0 1 33.52 30h8.126a.354.354 0 0 1 .354.354Z" />
                <path d="M20 36a15.939 15.939 0 0 1 5.124-11.712 13.915 13.915 0 0 1-.086-1.836 18.8 18.8 0 0 0 4.45-11.228c0-6.793-3.88-11.213-9.471-11.222L20.009 0 20 0c-5.59.01-9.471 4.431-9.471 11.224a18.8 18.8 0 0 0 4.45 11.228c0 2.07-.034 3.732-2.11 3.91-2.734.238-11.488 3.1-12.852 11.38A2 2 0 0 0 2.039 40h18.485A15.974 15.974 0 0 1 20 36Z" />
            </svg>
        );
    },
);
