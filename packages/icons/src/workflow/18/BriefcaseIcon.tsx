import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BriefcaseIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20 18v3.287a.75.75 0 0 1-.75.75L16.75 22a.75.75 0 0 1-.75-.75V18H0v13a1 1 0 0 0 1 1h34a1 1 0 0 0 1-1V18ZM35 10h-9V6a2 2 0 0 0-2-2H12a2 2 0 0 0-2 2v4H1a1 1 0 0 0-1 1v5h16v-1.361a.75.75 0 0 1 .75-.75l2.5.037a.75.75 0 0 1 .75.75V16h16v-5a1 1 0 0 0-1-1ZM13 7h10v3H13Z" />
            </svg>
        );
    },
);
