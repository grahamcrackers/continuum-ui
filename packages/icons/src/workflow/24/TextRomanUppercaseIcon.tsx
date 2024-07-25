import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TextRomanUppercaseIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="4" rx="1" ry="1" width="26" x="18" y="8" />
                <rect height="4" rx="1" ry="1" width="26" x="18" y="24" />
                <rect height="4" rx="1" ry="1" width="26" x="18" y="40" />
                <rect height="12" rx=".5" ry=".5" width="2" x="10" y="2" />
                <rect height="12" rx=".5" ry=".5" width="2" x="12" y="18" />
                <rect height="12" rx=".5" ry=".5" width="2" x="8" y="18" />
                <rect height="12" rx=".5" ry=".5" width="2" x="12" y="34" />
                <rect height="12" rx=".5" ry=".5" width="2" x="8" y="34" />
                <rect height="12" rx=".5" ry=".5" width="2" x="4" y="34" />
            </svg>
        );
    },
);
