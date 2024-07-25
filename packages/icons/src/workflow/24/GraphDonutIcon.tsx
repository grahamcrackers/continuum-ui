import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GraphDonutIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M26 5.248v8.177a1.009 1.009 0 0 0 .756.961 10 10 0 0 1 0 19.228 1.009 1.009 0 0 0-.756.961v8.177a1 1 0 0 0 1.14 1 20 20 0 0 0 0-39.505A1 1 0 0 0 26 5.248ZM18.388 15.751a9.927 9.927 0 0 1 2.858-1.364 1.011 1.011 0 0 0 .754-.961V5.25a1.006 1.006 0 0 0-1.142-1 19.9 19.9 0 0 0-10.13 4.816 1 1 0 0 0 .059 1.519l6.388 5.142a1.009 1.009 0 0 0 1.213.024ZM14 24a9.759 9.759 0 0 1 .746-3.715 1.012 1.012 0 0 0-.283-1.184l-6.4-5.152a1 1 0 0 0-1.5.266 19.99 19.99 0 0 0 14.3 29.538 1 1 0 0 0 1.14-1v-8.178a1.009 1.009 0 0 0-.756-.961A10 10 0 0 1 14 24Z" />
            </svg>
        );
    },
);
