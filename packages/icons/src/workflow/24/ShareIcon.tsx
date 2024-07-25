import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ShareIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M42 12h-5.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5H40v24H8V16h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H6a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2Z" />
                <path d="M23.646 1.146 14.3 10.293A1 1 0 0 0 15 12h5v13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V12h5a1 1 0 0 0 .707-1.707l-9.353-9.147a.5.5 0 0 0-.708 0Z" />
            </svg>
        );
    },
);
