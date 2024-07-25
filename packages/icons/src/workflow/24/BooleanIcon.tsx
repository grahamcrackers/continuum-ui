import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BooleanIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M32 12a12 12 0 0 1 0 24H16a12 12 0 0 1 0-24Zm0-4H16a16 16 0 0 0 0 32h16a16 16 0 0 0 0-32Zm8 16a8 8 0 1 0-8 8 8 8 0 0 0 8-8Z" />
            </svg>
        );
    },
);
