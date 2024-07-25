import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FileAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M16 2v10H6L16 2z" />
                <path d="M14.7 27A12.309 12.309 0 0 1 30 15.069V3a1 1 0 0 0-1-1H18v11a1 1 0 0 1-1 1H6v19a1 1 0 0 0 1 1h9.886a12.241 12.241 0 0 1-2.186-7Z" />
                <path d="M27 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9Zm5 9.4a.5.5 0 0 1-.5.5H28v3.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V28h-3.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H26v-3.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V26h3.5a.5.5 0 0 1 .5.5Z" />
            </svg>
        );
    },
);
