import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CheckmarkCircleOutlineIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M23.9 7.8A16.1 16.1 0 1 1 7.8 23.9 16.1 16.1 0 0 1 23.9 7.8Zm0-3.8a19.9 19.9 0 1 0 19.9 19.9A19.9 19.9 0 0 0 23.9 4Zm11.758 12.521-2.972-2.313a1 1 0 0 0-1.404.175l-9.27 11.892-4.938-4.938a1 1 0 0 0-1.414 0l-2.694 2.694a1 1 0 0 0 0 1.414l8.757 8.772a1 1 0 0 0 1.497-.092l12.613-16.2a1 1 0 0 0-.175-1.404Z" />
            </svg>
        );
    },
);
