import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const WatchIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M10 8a1.914 1.914 0 0 0-2 2v26a2.02 2.02 0 0 0 2 2 2.112 2.112 0 0 1 2 2v4a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-4a2.112 2.112 0 0 1 2-2 2.021 2.021 0 0 0 2-2V22a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2v-6a1.987 1.987 0 0 0-2.083-2A1.947 1.947 0 0 1 34 6V2a2 2 0 0 0-2-2H14a2 2 0 0 0-2 2v4a1.875 1.875 0 0 1-2 2Zm24 4v22H12V12Z" />
            </svg>
        );
    },
);
