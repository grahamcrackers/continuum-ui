import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BreadcrumbNavigationIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M35 23.959 23.45 8.599A1.5 1.5 0 0 0 22.251 8H2a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h20.249a1.5 1.5 0 0 0 1.201-.601ZM6 27.6A3.6 3.6 0 1 1 9.6 24 3.6 3.6 0 0 1 6 27.6Zm10 0a3.6 3.6 0 1 1 3.6-3.6 3.6 3.6 0 0 1-3.6 3.6Zm10 0a3.6 3.6 0 1 1 3.6-3.6 3.6 3.6 0 0 1-3.6 3.6Zm22-3.641L36.6 39.198a2 2 0 0 1-1.602.802h-5.001a1 1 0 0 1-.8-1.599L40 23.959 29.204 9.6a1 1 0 0 1 .8-1.601h4.998a2 2 0 0 1 1.598.798Z" />
            </svg>
        );
    },
);
