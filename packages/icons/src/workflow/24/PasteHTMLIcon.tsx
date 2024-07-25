import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PasteHTMLIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M30 6a6 6 0 0 0-12 0h-4v5a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V6Zm-6 3a3 3 0 1 1 3-3 3 3 0 0 1-3 3Z" />
                <path d="M40 6h-2v8a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V6H8a2 2 0 0 0-2 2v34a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2ZM19.242 34a.5.5 0 0 1 0 .707l-2.121 2.121a.5.5 0 0 1-.707 0l-6.121-6.121a1 1 0 0 1 0-1.414l6.121-6.121a.5.5 0 0 1 .707 0l2.121 2.121a.5.5 0 0 1 0 .707l-4 4Zm4.817 5.9a.5.5 0 0 1-.588.392l-2.942-.589a.5.5 0 0 1-.392-.588l3.8-19.02a.5.5 0 0 1 .588-.392l2.942.589a.5.5 0 0 1 .392.588Zm14.062-9.2L32 36.828a.5.5 0 0 1-.707 0l-2.121-2.121a.5.5 0 0 1 0-.707l4-4-4-4a.5.5 0 0 1 0-.707l2.121-2.121a.5.5 0 0 1 .707 0l6.121 6.121a1 1 0 0 1 0 1.414Z" />
            </svg>
        );
    },
);
