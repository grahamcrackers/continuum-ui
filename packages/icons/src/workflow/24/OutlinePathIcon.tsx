import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const OutlinePathIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M28 21v7h-7v4h9a2 2 0 0 0 2-2v-9ZM30 4H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h9v-4H8V8h20v7h4V6a2 2 0 0 0-2-2Z" />
                <path d="M18 16a2 2 0 0 0-2 2v9h4v-7h7v-4ZM42 16h-9v4h7v20H20v-7h-4v9a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V18a2 2 0 0 0-2-2Z" />
            </svg>
        );
    },
);
