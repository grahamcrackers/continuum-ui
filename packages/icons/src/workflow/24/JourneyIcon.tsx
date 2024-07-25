import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const JourneyIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M39 29.5a3.5 3.5 0 1 1-3.5 3.5 3.5 3.5 0 0 1 3.5-3.5Zm0-5.5a9 9 0 0 0-9 9c0 4.971 9 15 9 15s9-10.029 9-15a9 9 0 0 0-9-9Z" />
                <path d="M27.407 37.94A3.989 3.989 0 0 1 24 34V14a4 4 0 0 1 4-4h6.349a6 6 0 1 0 0-4H28a8 8 0 0 0-8 8v8h-6.349a6 6 0 1 0 0 4H20v8a8 8 0 0 0 8 8h1.786a33.687 33.687 0 0 1-2.379-4.06ZM40 5.6A2.4 2.4 0 1 1 37.6 8 2.4 2.4 0 0 1 40 5.6ZM8 26.4a2.4 2.4 0 1 1 2.4-2.4A2.4 2.4 0 0 1 8 26.4Z" />
            </svg>
        );
    },
);
