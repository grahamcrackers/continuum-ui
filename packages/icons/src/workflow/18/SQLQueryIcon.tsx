import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SQLQueryIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="m35.41 32.478-5.03-5.031a8.534 8.534 0 1 0-2.87 2.87l5.031 5.03a1.924 1.924 0 0 0 2.87 0 2.006 2.006 0 0 0 .555-1.12 2.036 2.036 0 0 0-.555-1.75ZM17.923 23.1a5.241 5.241 0 1 1 5.242 5.241 5.241 5.241 0 0 1-5.242-5.24ZM18 12c8.837 0 16-2.239 16-5s-7.163-5-16-5S2 4.239 2 7s7.163 5 16 5Zm10.297 1.125a11.289 11.289 0 0 1 5.058 5.271A2.078 2.078 0 0 0 34 17v-6.73c-1.039 1.314-3.194 2.23-5.703 2.855Zm-16.246 8.514a11.218 11.218 0 0 1 4.265-7.406C11.199 14.009 3.601 12.81 2 10.27V17c0 2.103 4.163 3.9 10.05 4.639Zm-.07 2.215c-4.32-.56-8.796-1.702-9.981-3.579V29c0 2.761 7.163 5 16 5 .774 0 1.53-.023 2.275-.056a11.237 11.237 0 0 1-8.294-10.09Z" />
            </svg>
        );
    },
);
