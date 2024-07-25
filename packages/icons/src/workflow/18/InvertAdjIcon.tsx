import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const InvertAdjIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M8 18.5a10.4 10.4 0 0 0 2.182 6.341L25.919 11.07A10.5 10.5 0 0 0 8 18.5Z" />
                <path d="M35 2H1a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h34a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm-6 16.5a10.466 10.466 0 0 1-18.818 6.341L2 32V4h32l-8.081 7.07A10.472 10.472 0 0 1 29 18.5Z" />
            </svg>
        );
    },
);
