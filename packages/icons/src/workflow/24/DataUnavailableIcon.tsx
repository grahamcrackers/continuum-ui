import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DataUnavailableIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <ellipse cx="24" cy="10.25" rx="20" ry="6.25" />
                <path d="M20.1 36a15.871 15.871 0 0 1 .519-3.965C14.3 31.624 5.872 30.122 4 27.152v10.6c0 3.268 8.03 5.946 18.258 6.223A15.8 15.8 0 0 1 20.1 36ZM36 20.1a15.8 15.8 0 0 1 7.955 2.148 2.037 2.037 0 0 0 .045-.28V15.5c-3.059 3.865-13.83 5-20 5s-17.765-1.458-20-5v6.471c0 3.257 7.978 5.93 18.16 6.221A15.886 15.886 0 0 1 36 20.1Z" />
                <path d="M36 24.1A11.9 11.9 0 1 0 47.9 36 11.9 11.9 0 0 0 36 24.1ZM44.925 36a8.859 8.859 0 0 1-1.663 5.158l-12.42-12.42A8.9 8.9 0 0 1 44.925 36Zm-17.85 0a8.859 8.859 0 0 1 1.663-5.158l12.42 12.42A8.9 8.9 0 0 1 27.075 36Z" />
            </svg>
        );
    },
);
