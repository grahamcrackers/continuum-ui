import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CopyIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="2" rx=".5" ry=".5" width="2" x="32" y="22" />
                <rect height="2" rx=".5" ry=".5" width="2" x="32" y="18" />
                <rect height="2" rx=".5" ry=".5" width="2" x="32" y="14" />
                <rect height="2" rx=".5" ry=".5" width="2" x="32" y="10" />
                <rect height="2" rx=".5" ry=".5" width="2" x="32" y="6" />
                <rect height="2" rx=".5" ry=".5" width="2" x="32" y="2" />
                <rect height="2" rx=".5" ry=".5" width="2" x="28" y="2" />
                <rect height="2" rx=".5" ry=".5" width="2" x="24" y="2" />
                <rect height="2" rx=".5" ry=".5" width="2" x="20" y="2" />
                <rect height="2" rx=".5" ry=".5" width="2" x="16" y="2" />
                <rect height="2" rx=".5" ry=".5" width="2" x="12" y="2" />
                <rect height="2" rx=".5" ry=".5" width="2" x="12" y="6" />
                <rect height="2" rx=".5" ry=".5" width="2" x="12" y="10" />
                <rect height="2" rx=".5" ry=".5" width="2" x="12" y="14" />
                <rect height="2" rx=".5" ry=".5" width="2" x="12" y="18" />
                <rect height="2" rx=".5" ry=".5" width="2" x="12" y="22" />
                <rect height="2" rx=".5" ry=".5" width="2" x="16" y="22" />
                <rect height="2" rx=".5" ry=".5" width="2" x="20" y="22" />
                <rect height="2" rx=".5" ry=".5" width="2" x="24" y="22" />
                <rect height="2" rx=".5" ry=".5" width="2" x="28" y="22" />
                <path d="M10 12H3a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1v-7H11a1 1 0 0 1-1-1Z" />
            </svg>
        );
    },
);
