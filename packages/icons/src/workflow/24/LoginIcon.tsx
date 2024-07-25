import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const LoginIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M16 40.667a11.012 11.012 0 0 1 11-11 10.6 10.6 0 0 1 2.2.23l.529-.529a2.071 2.071 0 0 1-.7-1.535v-2.808a2.039 2.039 0 0 1 .455-1.252 17.5 17.5 0 0 0 3.1-9.86c0-7-3.419-10.3-8.585-10.3s-8.683 3.455-8.683 10.3a17.628 17.628 0 0 0 3.253 9.859 2.036 2.036 0 0 1 .455 1.253v2.795a1.888 1.888 0 0 1-1.549 1.945C6.182 30.881 4 38.96 4 42c0 .338.037 1.667.06 2h12.46a10.937 10.937 0 0 1-.52-3.333Z" />
                <path d="M47.629 28.825 42.6 23.8a1.167 1.167 0 0 0-1.65 0l-10.7 10.7a6.92 6.92 0 0 0-3.25-.833 7 7 0 1 0 7 7 6.925 6.925 0 0 0-.816-3.214l5.231-5.231 2.909 2.909a.583.583 0 0 0 .825 0l2.6-2.6-3.321-3.321.958-.957 3.321 3.321 1.921-1.921a.583.583 0 0 0 .001-.828Zm-21.458 15A2.333 2.333 0 1 1 28.5 41.5a2.334 2.334 0 0 1-2.329 2.329Z" />
            </svg>
        );
    },
);
