import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FeedbackIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M38 6H10a6 6 0 0 0-6 6v16a6 6 0 0 0 6 6h2v9.593a1 1 0 0 0 1.707.707L24 34h14a6 6 0 0 0 6-6V12a6 6 0 0 0-6-6ZM12 24.45A4.45 4.45 0 1 1 16.45 20 4.45 4.45 0 0 1 12 24.45Zm12 0A4.45 4.45 0 1 1 28.45 20 4.45 4.45 0 0 1 24 24.45Zm12 0A4.45 4.45 0 1 1 40.45 20 4.45 4.45 0 0 1 36 24.45Z" />
            </svg>
        );
    },
);
