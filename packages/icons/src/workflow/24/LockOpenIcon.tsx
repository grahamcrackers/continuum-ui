import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const LockOpenIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M38 20H16v-7.652C16 10.131 17.646 4 24 4a7.988 7.988 0 0 1 7.433 5.1.967.967 0 0 0 .909.609 1.011 1.011 0 0 0 .45-.107L34.6 8.7a1.019 1.019 0 0 0 .564-.9A11.684 11.684 0 0 0 24 .1c-8.1 0-12 7.1-12 12.337V20h-2a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V22a2 2 0 0 0-2-2ZM26 33.445V37a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3.555a4 4 0 1 1 4 0Z" />
            </svg>
        );
    },
);
