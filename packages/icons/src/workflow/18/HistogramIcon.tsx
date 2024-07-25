import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const HistogramIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="10" rx=".5" ry=".5" width="2" x="2" y="24" />
                <rect height="18" rx=".5" ry=".5" width="2" x="6" y="16" />
                <rect height="18" rx=".5" ry=".5" width="2" x="18" y="16" />
                <rect height="14" rx=".5" ry=".5" width="2" x="26" y="20" />
                <rect height="6" rx=".5" ry=".5" width="2" x="30" y="28" />
                <rect height="28" rx=".5" ry=".5" width="2" x="10" y="6" />
                <rect height="22" rx=".5" ry=".5" width="2" x="14" y="12" />
                <rect height="24" rx=".5" ry=".5" width="2" x="22" y="10" />
            </svg>
        );
    },
);
