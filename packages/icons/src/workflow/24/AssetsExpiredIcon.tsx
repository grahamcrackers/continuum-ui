import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AssetsExpiredIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18.718 32H6V8h36v18.128l4 7.158V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h12.483Z" />
                <path d="M47.627 44.4 32.939 18.115a1.076 1.076 0 0 0-1.878 0L16.372 44.4a1.076 1.076 0 0 0 .939 1.6h29.377a1.076 1.076 0 0 0 .939-1.6ZM34 41.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5Zm0-6a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5Z" />
            </svg>
        );
    },
);
