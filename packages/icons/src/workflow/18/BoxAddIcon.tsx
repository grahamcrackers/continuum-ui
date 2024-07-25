import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BoxAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m33.408 8.469-5.437-2.947-16.516 9.2L18 18.265l.852-.461a12.255 12.255 0 0 1 4.905-2.657l9.651-5.228a.824.824 0 0 0 0-1.45Zm-3 6.72A12.233 12.233 0 0 1 34 16.893v-3.7ZM2.592 9.919l5.529 3 16.516-9.2L18.762.535a1.6 1.6 0 0 0-1.523 0L2.592 8.469a.824.824 0 0 0 0 1.45ZM16.213 21.09 2 13.193v13.459a1.6 1.6 0 0 0 .823 1.4L16.4 35.594v-2.376a12.259 12.259 0 0 1-.187-12.128ZM27 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9Zm5 9.4a.5.5 0 0 1-.5.5H28v3.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V28h-3.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H26v-3.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V26h3.5a.5.5 0 0 1 .5.5Z" />
            </svg>
        );
    },
);
