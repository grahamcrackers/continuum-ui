import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DateIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M45 8h-7V5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3H14V5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3H3a1 1 0 0 0-1 1v32a1 1 0 0 0 1 1h42a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Zm-3 30H6V12h4v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1h20v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1h4Z" />
                <path d="M28 25v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1Z" />
            </svg>
        );
    },
);
