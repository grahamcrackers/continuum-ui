import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ApproveRejectIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M7 18a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16.376a19.836 19.836 0 0 1 8.106-1.974A15.816 15.816 0 0 0 16 .2 15.661 15.661 0 0 0 .2 16a15.815 15.815 0 0 0 11.826 15.482A19.912 19.912 0 0 1 17.765 18Z" />
                <path d="M32 16a16 16 0 0 0-16 16 15.831 15.831 0 0 0 16 15.8A15.661 15.661 0 0 0 47.8 32 15.831 15.831 0 0 0 32 16Zm8.739 11.07L30.033 40.8a1.212 1.212 0 0 1-.875.461h-.072a1.2 1.2 0 0 1-.85-.352l-5.884-5.893a1.2 1.2 0 0 1 0-1.7L23.678 32a1.2 1.2 0 0 1 1.7 0l3.445 3.444 8.57-10.981a1.2 1.2 0 0 1 1.685-.21l1.455 1.133a1.2 1.2 0 0 1 .206 1.684Z" />
            </svg>
        );
    },
);
