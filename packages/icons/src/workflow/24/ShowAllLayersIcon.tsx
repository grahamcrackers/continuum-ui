import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ShowAllLayersIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m43.842 35.724-7.092-3.553L24 38.558l-12.75-6.387-7.092 3.553a.5.5 0 0 0 0 .894l19.394 9.716a1 1 0 0 0 .9 0l19.394-9.716a.5.5 0 0 0-.004-.894Z" />
                <path d="m43.842 23.724-7.092-3.553L24 26.558l-12.75-6.387-7.092 3.553a.5.5 0 0 0 0 .894l19.394 9.716a1 1 0 0 0 .9 0l19.394-9.716a.5.5 0 0 0-.004-.894Z" />
                <path d="M23.552 22.334 4.158 12.618a.5.5 0 0 1 0-.894l19.394-9.716a1 1 0 0 1 .9 0l19.394 9.716a.5.5 0 0 1 0 .894l-19.398 9.716a1 1 0 0 1-.896 0Z" />
            </svg>
        );
    },
);
