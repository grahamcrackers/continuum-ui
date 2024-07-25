import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const MoonIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24 4a20 20 0 1 0 20 20A20 20 0 0 0 24 4Zm1.453 35.934c-.478.043-.963.066-1.453.066a16 16 0 0 1 0-32c.49 0 .975.023 1.453.066a26 26 0 0 0 0 31.867Z" />
            </svg>
        );
    },
);
