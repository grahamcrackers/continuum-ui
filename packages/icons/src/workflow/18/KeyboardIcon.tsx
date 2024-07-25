import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const KeyboardIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="4" rx=".5" ry=".5" width="4" y="8" />
                <rect height="4" rx=".5" ry=".5" width="8" y="14" />
                <rect height="4" rx=".5" ry=".5" width="6" x="28" y="14" />
                <rect height="4" rx=".5" ry=".5" width="8" x="26" y="20" />
                <rect height="4" rx=".5" ry=".5" width="6" y="20" />
                <rect height="4" rx=".5" ry=".5" width="16" x="8" y="20" />
                <rect height="4" rx=".5" ry=".5" width="4" x="6" y="8" />
                <rect height="4" rx=".5" ry=".5" width="4" x="12" y="8" />
                <rect height="4" rx=".5" ry=".5" width="4" x="18" y="8" />
                <rect height="4" rx=".5" ry=".5" width="4" x="10" y="14" />
                <rect height="4" rx=".5" ry=".5" width="4" x="16" y="14" />
                <rect height="4" rx=".5" ry=".5" width="4" x="22" y="14" />
                <rect height="4" rx=".5" ry=".5" width="4" x="24" y="8" />
                <rect height="4" rx=".5" ry=".5" width="4" x="30" y="8" />
            </svg>
        );
    },
);
