import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FilterStarIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M14.8 27a13.146 13.146 0 0 1 3.2-8.411c2.083-2.694 11.733-14.972 11.733-14.972A1 1 0 0 0 28.946 2H1.054a1 1 0 0 0-.787 1.617L12 18.589V33.9a.992.992 0 0 0 1.68.825l2.338-2.439A12.131 12.131 0 0 1 14.8 27Z" />
                <path d="M27 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9Zm6.874 7.083-3.789 3.037 1.281 4.68a.2.2 0 0 1-.306.222L27 30.461l-4.059 2.665a.2.2 0 0 1-.306-.222l1.281-4.684-3.789-3.037a.2.2 0 0 1 .117-.36l4.85-.23 1.718-4.542a.2.2 0 0 1 .378 0l1.718 4.542 4.85.23a.2.2 0 0 1 .116.36Z" />
            </svg>
        );
    },
);
