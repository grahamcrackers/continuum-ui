import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GraphBarHorizontalStackedIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="34" rx=".5" ry=".5" width="2" x="2" y="2" />
                <path d="M6 20h6v6H6zM6 4h14v6H6zM6 28h4v6H6zM6 12h10v6H6zM25 12h-7v6h7a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1ZM33 4H22v6h11a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1ZM17 20h-3v6h3a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1ZM15 28h-3v6h3a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Z" />
            </svg>
        );
    },
);
