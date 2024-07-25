import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AlignBottomIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="26" rx="1" ry="1" width="10" x="6" y="4" />
                <rect height="16" rx="1" ry="1" width="10" x="20" y="14" />
                <rect height="2" rx=".5" ry=".5" width="36" y="32" />
            </svg>
        );
    },
);
