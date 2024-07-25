import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const LinkNavIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="4" rx="1" ry="1" width="24" x="24" y="24" />
                <rect height="4" rx="1" ry="1" width="24" x="24" y="32" />
                <rect height="4" rx="1" ry="1" width="24" x="24" y="40" />
                <path d="M20 36.886c-.826.848-1.812 1.874-2.055 2.116A6.327 6.327 0 0 1 9 30.055c1.064-1.064 7.2-7.1 8.214-8.214C18.3 20.646 19.1 20.069 20 20h10.958a10.4 10.4 0 0 0-1.271-1.587 11.281 11.281 0 0 0-15.829.073L5.643 26.7A11.049 11.049 0 0 0 20 43.419Z" />
                <path d="M20 24.874a3.163 3.163 0 0 1-.488-.947 3.11 3.11 0 0 0-.659.491l-2.524 2.641a11.043 11.043 0 0 0 1.893 2.581A9.435 9.435 0 0 0 20 31.033ZM26.991 12c.8-.8 2.732-2.668 3.063-3A6.327 6.327 0 1 1 39 17.945L36.947 20h6.472A11.049 11.049 0 0 0 26.7 5.643c-.595.595-3.806 3.741-5.482 5.418a12.822 12.822 0 0 1 5.773.939Z" />
            </svg>
        );
    },
);
