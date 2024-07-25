import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TextItalicIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M42.551 6h-30a3.162 3.162 0 0 0-2.727 2l-2.548 7a.677.677 0 0 0 .636 1h2a1.583 1.583 0 0 0 1.364-1l1.82-5h10L12.9 38h-3a1.583 1.583 0 0 0-1.36 1l-.727 2a.676.676 0 0 0 .636 1h12a1.584 1.584 0 0 0 1.364-1l.727-2a.677.677 0 0 0-.636-1h-3L29.1 10h10l-1.82 5a.677.677 0 0 0 .636 1h2a1.583 1.583 0 0 0 1.364-1l2.548-7a1.354 1.354 0 0 0-1.277-2Z" />
            </svg>
        );
    },
);
