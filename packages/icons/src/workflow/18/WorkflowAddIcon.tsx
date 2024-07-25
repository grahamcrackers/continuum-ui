import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const WorkflowAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M33 4h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Zm0 10h-4a.986.986 0 0 0-.95.753 12.22 12.22 0 0 1 5.95 2.14V15a1 1 0 0 0-1-1Zm-7.5-8h-7a.5.5 0 0 0-.5.5V16h-5.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H18v.635A12.326 12.326 0 0 1 21.52 16H20V8h5.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5ZM9 12H3a1 1 0 0 0-1 1v9.2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1ZM27.1 18.2a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9Zm5 9.4a.5.5 0 0 1-.5.5h-3.5v3.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-3.5h-3.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3.5v-3.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.5h3.5a.5.5 0 0 1 .5.5Z" />
            </svg>
        );
    },
);
