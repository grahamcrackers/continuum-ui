import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CreditCardIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M4 42a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2v-4H4ZM41.729 23.87c-3.147 1.574-14.1 6.66-14.5 6.849a8.625 8.625 0 0 1-3.558.812 6.3 6.3 0 0 1-5.884-3.791A7.086 7.086 0 0 1 19.346 20H6a2 2 0 0 0-2 2v12h40V22.263a11.1 11.1 0 0 1-2.271 1.607Z" />
                <path d="M16.768 16s.355-1.633 1.062-4.215c.483-1.761 6.685-9.481 9.06-10.273C29.234.73 42.376.167 42.376.167L47.9 10.2s-4.832 8.525-7.964 10.091-14.458 6.826-14.458 6.826-2.949 1.427-4.053-1.023c-.84-1.862 1.059-3.579 1.059-3.579s4.326-3 6-4.317c1.216-.959 2.5-2.867.788-4.581s-3.462-.017-4.371.771S23.1 16 23.1 16Z" />
            </svg>
        );
    },
);
