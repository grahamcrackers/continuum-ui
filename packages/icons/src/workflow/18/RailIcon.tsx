import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const RailIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="4" rx="1" ry="1" width="24" x="6" y="8" />
                <rect height="4" rx="1" ry="1" width="24" x="6" y="16" />
                <rect height="4" rx="1" ry="1" width="24" x="6" y="24" />
            </svg>
        );
    },
);
