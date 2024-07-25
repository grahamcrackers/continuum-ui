import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const RevenueIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M0 42a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V23.079l-8 6.668ZM12 42a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V28.647l-8-8ZM24 42a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V27.659L24 34ZM40.041 21.6 36 24.643V42a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V22.486a5.018 5.018 0 0 1-1.008.1 4.936 4.936 0 0 1-2.951-.986Z" />
                <path d="M32.414 6.489a1 1 0 0 0-.707 1.711l3.327 3.327-9.334 7.852L12.892 6.568a1 1 0 0 0-1.347-.061L0 16.126v8.414l11.754-9.8 12.6 12.6a1 1 0 0 0 1.31.091L39.41 15.9l2.883 2.883A1 1 0 0 0 44 18.075V6.489Z" />
            </svg>
        );
    },
);
