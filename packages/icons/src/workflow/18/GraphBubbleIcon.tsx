import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GraphBubbleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <circle cx="8" cy="8" r="6" />
                <circle cx="6" cy="24" r="4" />
                <path d="M26.5 14.338a4.941 4.941 0 1 0-6.547.507 10.04 10.04 0 1 0 6.547-.507Z" />
            </svg>
        );
    },
);
