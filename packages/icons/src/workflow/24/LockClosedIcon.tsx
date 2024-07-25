import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const LockClosedIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M38 20h-2v-2a12 12 0 0 0-24 0v2h-2a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V22a2 2 0 0 0-2-2ZM26 33.445V37a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3.555a4 4 0 1 1 4 0ZM32 20H16v-2a8 8 0 0 1 16 0Z" />
            </svg>
        );
    },
);
