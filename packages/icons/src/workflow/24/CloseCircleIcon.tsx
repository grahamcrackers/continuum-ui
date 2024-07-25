import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CloseCircleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M38.071 9.928a19.9 19.9 0 1 0 0 28.143 19.9 19.9 0 0 0 0-28.143Zm-6.294 23.547a1 1 0 0 1-1.414 0L24 27.111l-6.364 6.364a1 1 0 0 1-1.414 0l-1.7-1.7a1 1 0 0 1 0-1.414L20.888 24l-6.363-6.363a1 1 0 0 1 0-1.415l1.7-1.7a1 1 0 0 1 1.414 0L24 20.888l6.364-6.363a1 1 0 0 1 1.415 0l1.695 1.7a1 1 0 0 1 0 1.414L27.112 24l6.362 6.363a1 1 0 0 1 0 1.414Z" />
            </svg>
        );
    },
);
