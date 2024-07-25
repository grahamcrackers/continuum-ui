import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AssetCheckIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18.189 7.906A1.806 1.806 0 1 0 16.383 6.1a1.806 1.806 0 0 0 1.806 1.806Z" />
                <path d="M10 10.2a3.447 3.447 0 0 0-2.1-1.375c-1.845 0-5.9 5.588-5.9 5.588V2h22v6h2V1a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h9Z" />
                <path d="M15.059 30H14.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h.256a12.2 12.2 0 0 1 .659-3H14.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2.12a12.218 12.218 0 0 1 14-6.436V12.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3a.488.488 0 0 1-.127.307A12.268 12.268 0 0 1 34 16.993V12a2 2 0 0 0-2-2H14a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h1.721a12.114 12.114 0 0 1-.662-2ZM14 12.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5Z" />
                <path d="M27 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9Zm-2.338 14.312-4.128-4.127a.5.5 0 0 1 0-.707l1.037-1.037a.5.5 0 0 1 .707 0l2.731 2.731 6.106-6.106a.5.5 0 0 1 .707 0l1.043 1.043a.5.5 0 0 1 0 .707l-7.5 7.5a.5.5 0 0 1-.703-.004Z" />
            </svg>
        );
    },
);
