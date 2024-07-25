import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BooleanIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24 8.5a9.5 9.5 0 0 1 0 19H12a9.5 9.5 0 0 1 0-19ZM24 6H12a12 12 0 0 0 0 24h12a12 12 0 0 0 0-24Zm0 6a6 6 0 1 1-6 6 6.007 6.007 0 0 1 6-6Z" />
            </svg>
        );
    },
);
