import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BookmarkSmallOutlineIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M22 8v17.914l-3.58-3.5-1.4-1.364-1.4 1.36L12 25.944V8h10m1-2H11a1 1 0 0 0-1 1v22.506a.523.523 0 0 0 .306.456.421.421 0 0 0 .2.044.511.511 0 0 0 .352-.148l6.174-6.01 6.122 5.988a.5.5 0 0 0 .352.144.472.472 0 0 0 .2-.038.5.5 0 0 0 .294-.454V7a1 1 0 0 0-1-1Z" />
            </svg>
        );
    },
);
