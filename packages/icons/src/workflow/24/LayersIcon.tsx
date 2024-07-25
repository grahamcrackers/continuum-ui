import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const LayersIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m36.977 26.447-12.411 8.611a.993.993 0 0 1-1.132 0l-12.411-8.611-7.166 4.972a.5.5 0 0 0 0 .821l19.577 13.583a.993.993 0 0 0 1.132 0L44.143 32.24a.5.5 0 0 0 0-.821Z" />
                <path d="M23.434 30.164 3.858 16.581a.5.5 0 0 1 0-.821L23.434 2.177a.993.993 0 0 1 1.132 0L44.142 15.76a.5.5 0 0 1 0 .821L24.566 30.164a.99.99 0 0 1-1.132 0Z" />
            </svg>
        );
    },
);
