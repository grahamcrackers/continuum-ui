import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TextAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M27 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9Zm4.9 10.4h-3.4v3.4a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-3.4h-3.4a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h3.4v-3.4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v3.4h3.4a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5Z" />
                <path d="M16 27.1V8h8v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V8h8v20H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h8.172A10.82 10.82 0 0 1 16 27.1Z" />
            </svg>
        );
    },
);
