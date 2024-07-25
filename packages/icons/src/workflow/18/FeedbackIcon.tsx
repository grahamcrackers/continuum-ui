import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FeedbackIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M30 2H6a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h2v8.793a.5.5 0 0 0 .854.354L18 26h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4ZM8 17.35a3.85 3.85 0 1 1 3.85-3.85A3.85 3.85 0 0 1 8 17.35Zm10 0a3.85 3.85 0 1 1 3.85-3.85A3.85 3.85 0 0 1 18 17.35Zm10 0a3.85 3.85 0 1 1 3.85-3.85A3.85 3.85 0 0 1 28 17.35Z" />
            </svg>
        );
    },
);
