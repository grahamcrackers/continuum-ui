import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PolygonIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m41.261 24.049-8.387 14.094H15.181L6.743 23.976l8.434-14.119h17.69ZM34.279 6H13.773a1.386 1.386 0 0 0-1.216.721l-9.91 16.59a1.383 1.383 0 0 0 0 1.324l9.912 16.642a1.383 1.383 0 0 0 1.215.723h20.507a1.386 1.386 0 0 0 1.217-.724l9.856-16.562a1.387 1.387 0 0 0 0-1.319L35.5 6.727A1.385 1.385 0 0 0 34.279 6Z" />
            </svg>
        );
    },
);
