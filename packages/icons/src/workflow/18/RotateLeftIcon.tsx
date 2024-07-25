import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const RotateLeftIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M33 10H11a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1Z" />
                <path d="M7.5 15h-2v-3a6 6 0 0 1 6-6h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-2a9 9 0 0 0-9 9v3h-2a.5.5 0 0 0-.5.5.49.49 0 0 0 .147.35l3.537 4.033a.5.5 0 0 0 .632 0l3.537-4.033A.49.49 0 0 0 8 15.5a.5.5 0 0 0-.5-.5Z" />
            </svg>
        );
    },
);
