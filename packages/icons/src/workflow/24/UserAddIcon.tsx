import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const UserAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20 36a16.024 16.024 0 0 1 10.312-14.954 15.627 15.627 0 0 0 1.2-5.823C31.512 8.423 27.624 4 22.025 4s-9.488 4.423-9.488 11.223c0 6.286 4.449 11.229 4.449 11.229 0 2.07-.033 3.731-2.109 3.91-2.736.237-11.488 3.1-12.852 11.38A2.007 2.007 0 0 0 4.047 44h18.1A15.906 15.906 0 0 1 20 36Z" />
                <path d="M36 24a12 12 0 1 0 12 12 12 12 0 0 0-12-12Zm8 13a1 1 0 0 1-1 1h-5v5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-5h-5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h5v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h5a1 1 0 0 1 1 1Z" />
            </svg>
        );
    },
);
