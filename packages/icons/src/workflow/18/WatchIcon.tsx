import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const WatchIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M8 6a1.914 1.914 0 0 0-2 2v20a2.02 2.02 0 0 0 2 2 2.112 2.112 0 0 1 2 2v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a2.112 2.112 0 0 1 2-2 2.021 2.021 0 0 0 2-2V16h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1V8a1.987 1.987 0 0 0-2.083-2A1.947 1.947 0 0 1 26 4V1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v3a1.875 1.875 0 0 1-2 2Zm18 4v16H10V10Z" />
            </svg>
        );
    },
);
