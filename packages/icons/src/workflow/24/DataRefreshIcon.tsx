import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DataRefreshIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <ellipse cx="24" cy="10.25" rx="20" ry="6.25" />
                <path d="M18 35.875A10.511 10.511 0 0 1 18.21 34a17.336 17.336 0 0 1 .5-2.115c-6-.568-13.021-2.055-14.709-4.732v10.6c0 2.8 5.886 5.167 14 5.963ZM34 20a15.3 15.3 0 0 1 8.284 2.417l.858-.876.858-.876V15.5c-3.059 3.865-13.83 5-20 5s-17.765-1.458-20-5v6.471c0 3.059 7.039 5.6 16.33 6.14A15.9 15.9 0 0 1 34 20ZM42.96 36A9.186 9.186 0 0 1 34 44.58a8.181 8.181 0 0 1-6.222-2.69L31.66 38H22v9.68l3.475-3.48A11.641 11.641 0 0 0 34 48c6.38 0 11.58-5.3 12-12Z" />
                <path d="M42.566 27.846A11.564 11.564 0 0 0 34 24c-6.38 0-11.58 5.3-12 12h3.04A9.186 9.186 0 0 1 34 27.42a8.765 8.765 0 0 1 6.32 2.72L36.54 34H46v-9.66Z" />
            </svg>
        );
    },
);
