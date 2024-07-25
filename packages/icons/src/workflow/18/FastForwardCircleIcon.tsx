import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FastForwardCircleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm-8 23.017V10.984a1 1 0 0 1 1.625-.781L14 12.1v11.8l-2.375 1.9A1 1 0 0 1 10 25.017Zm18.4-6.236L19.625 25.8A1 1 0 0 1 18 25.017V10.984a1 1 0 0 1 1.625-.781L28.4 17.22a1 1 0 0 1 0 1.561Z" />
            </svg>
        );
    },
);
