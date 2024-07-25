import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AddCircleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24 4.1A19.9 19.9 0 1 0 43.9 24 19.9 19.9 0 0 0 24 4.1ZM36 25a1 1 0 0 1-1 1h-9v9a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-9h-9a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h9v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9h9a1 1 0 0 1 1 1Z" />
            </svg>
        );
    },
);
