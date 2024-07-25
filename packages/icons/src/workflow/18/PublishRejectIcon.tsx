import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PublishRejectIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M33.191 1.113 1.8 10.478a.5.5 0 0 0-.08.926l7.92 3.954ZM15.645 22.372 10.08 19.25v7.639a.713.713 0 0 0 1.174.544l3.795-3.2a12.239 12.239 0 0 1 .596-1.861ZM27 14.8a12.288 12.288 0 0 1 2.786.329l5.851-12.765-22.548 14.667 4.435 2.229A12.273 12.273 0 0 1 27 14.8ZM27 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9Zm5 9.4a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5Z" />
            </svg>
        );
    },
);
