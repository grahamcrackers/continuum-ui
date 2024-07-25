import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const MoveLeftRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M6.311 10.483A1 1 0 0 1 8 11.2V14h6v6H8v2.778a1.006 1.006 0 0 1-1.707.722L0 17ZM29.707 10.5a1.006 1.006 0 0 0-1.707.722V14h-6v6h6v2.8a1 1 0 0 0 1.689.715L36 17Z" />
                <rect height="30" rx="1" ry="1" width="4" x="16" y="2" />
            </svg>
        );
    },
);
