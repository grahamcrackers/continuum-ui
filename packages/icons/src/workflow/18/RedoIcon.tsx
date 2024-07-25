import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const RedoIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M5.337 12.542A10.391 10.391 0 0 1 12.329 10H25V4.8a.8.8 0 0 1 .8-.8.787.787 0 0 1 .527.2l7.524 7.445a.5.5 0 0 1 0 .7L26.332 19.8a.787.787 0 0 1-.527.2.8.8 0 0 1-.8-.8V14H12.123A6.139 6.139 0 0 0 5.9 19.8 5.889 5.889 0 0 0 12 26h7a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6.526a10.335 10.335 0 0 1-10.426-9.013 9.947 9.947 0 0 1 3.289-8.445Z" />
            </svg>
        );
    },
);
