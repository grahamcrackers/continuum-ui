import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TextIndentDecreaseIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="4" rx="1" ry="1" width="24" x="8" y="28" />
                <rect height="4" rx="1" ry="1" width="12" x="20" y="20" />
                <rect height="4" rx="1" ry="1" width="12" x="20" y="12" />
                <rect height="4" rx="1" ry="1" width="24" x="8" y="4" />
                <path d="M8 14v-3.328a.5.5 0 0 0-.866-.341L0 18l7.134 7.669A.5.5 0 0 0 8 25.328V22h7a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Z" />
            </svg>
        );
    },
);
