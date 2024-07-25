import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const OpenRecentIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M27.1 18.1A8.9 8.9 0 1 0 36 27a8.9 8.9 0 0 0-8.9-8.9Zm0 16a7.1 7.1 0 0 1-1-14.121V27a1 1 0 0 0 .293.707l3.022 3.023a.5.5 0 0 0 .708 0l.707-.708a.5.5 0 0 0 0-.707l-2.73-2.729v-6.608a7.1 7.1 0 0 1-1 14.122Z" />
                <path d="M15.8 27a11.289 11.289 0 0 1 18.565-8.642l1.128-3.007A1 1 0 0 0 34.557 14H30V9a1 1 0 0 0-1-1l-12.332.008-3.3-3.4A2 2 0 0 0 11.929 4H4a2 2 0 0 0-2 2v23a1 1 0 0 0 1 1h13.216a11.254 11.254 0 0 1-.416-3ZM7.757 14.649 4 24.667V6h7.929l3.305 3.4.59.607h.845L28 10v4H8.693a1 1 0 0 0-.936.649Z" />
            </svg>
        );
    },
);
