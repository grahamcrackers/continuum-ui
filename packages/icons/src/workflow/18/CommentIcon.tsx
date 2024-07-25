import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CommentIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M6 4a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h2v8.793a.5.5 0 0 0 .854.353L18 26h12a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4Z" />
            </svg>
        );
    },
);
