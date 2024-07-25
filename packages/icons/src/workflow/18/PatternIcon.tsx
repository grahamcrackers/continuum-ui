import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PatternIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="4" rx=".5" ry=".5" width="6" x="2" y="4" />
                <rect height="8" rx=".5" ry=".5" width="2" x="10" y="2" />
                <rect height="4" rx=".5" ry=".5" width="6" x="14" y="4" />
                <rect height="4" rx=".5" ry=".5" width="6" x="26" y="4" />
                <rect height="8" rx=".5" ry=".5" width="2" x="22" y="2" />
                <rect height="4" rx=".5" ry=".5" width="6" x="2" y="20" />
                <rect height="8" rx=".5" ry=".5" width="2" x="10" y="18" />
                <rect height="4" rx=".5" ry=".5" width="6" x="14" y="20" />
                <rect height="4" rx=".5" ry=".5" width="6" x="26" y="20" />
                <rect height="8" rx=".5" ry=".5" width="2" x="22" y="18" />
                <rect height="8" rx=".5" ry=".5" width="2" x="4" y="10" />
                <rect height="4" rx=".5" ry=".5" width="6" x="8" y="12" />
                <rect height="4" rx=".5" ry=".5" width="6" x="20" y="12" />
                <rect height="8" rx=".5" ry=".5" width="2" x="16" y="10" />
                <rect height="8" rx=".5" ry=".5" width="2" x="28" y="10" />
                <rect height="8" rx=".5" ry=".5" width="2" x="4" y="26" />
                <rect height="4" rx=".5" ry=".5" width="6" x="8" y="28" />
                <rect height="4" rx=".5" ry=".5" width="6" x="20" y="28" />
                <rect height="8" rx=".5" ry=".5" width="2" x="16" y="26" />
                <rect height="8" rx=".5" ry=".5" width="2" x="28" y="26" />
            </svg>
        );
    },
);
