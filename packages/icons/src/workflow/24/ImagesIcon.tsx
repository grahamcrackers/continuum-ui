import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ImagesIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M41.406 22a3.5 3.5 0 1 1-3.5-3.5 3.5 3.5 0 0 1 3.5 3.5ZM40 6a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h2V8h36Z" />
                <path d="M46 12H10a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2Zm-2 24.9-6.225-6.225a2.362 2.362 0 0 0-3.34 0L30.809 34.3l-8.923-8.923a2.361 2.361 0 0 0-3.339 0L12 31.922V16h32Z" />
            </svg>
        );
    },
);
