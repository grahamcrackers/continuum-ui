import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const LocationIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18 1.925a12 12 0 0 0-12 12c0 6.627 12 21.75 12 21.75s12-15.123 12-21.75a12 12 0 0 0-12-12Zm0 16.725A4.65 4.65 0 1 1 22.65 14 4.65 4.65 0 0 1 18 18.65Z" />
            </svg>
        );
    },
);
