import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TextAlignRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="4" rx="1" ry="1" width="24" x="8" y="28" />
                <rect height="4" rx="1" ry="1" width="30" x="2" y="4" />
                <rect height="4" rx="1" ry="1" width="24" x="8" y="12" />
                <rect height="4" rx="1" ry="1" width="30" x="2" y="20" />
            </svg>
        );
    },
);
