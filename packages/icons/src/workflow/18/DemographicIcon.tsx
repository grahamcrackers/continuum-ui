import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DemographicIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M7.939 8.1a3.9 3.9 0 1 0-3.9-3.9 3.9 3.9 0 0 0 3.9 3.9ZM17.939 8.1a3.9 3.9 0 1 0-3.9-3.9 3.9 3.9 0 0 0 3.9 3.9ZM27.939 8.1a3.9 3.9 0 1 0-3.9-3.9 3.9 3.9 0 0 0 3.9 3.9ZM28.139 10h-.4a6.136 6.136 0 0 0-4.8 1.863 6.139 6.139 0 0 0-4.8-1.863h-.4a6.136 6.136 0 0 0-4.8 1.863A6.139 6.139 0 0 0 8.139 10h-.4c-3.2 0-5.8 1.6-5.8 4.8V22a1 1 0 0 0 1 1h1l1 10a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1l1-10h2l1 10a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1l1-10h2l1 10a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1l1-10h1a1 1 0 0 0 1-1v-7.2c0-3.2-2.597-4.8-5.8-4.8Z" />
            </svg>
        );
    },
);
