import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TextParagraphIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18.412 4A12.275 12.275 0 0 0 6.1 14.427 12.011 12.011 0 0 0 18 28c1.4 0 4-.1 4-.1V43a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V8h8v35a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V6a2 2 0 0 0-2-2Z" />
            </svg>
        );
    },
);
