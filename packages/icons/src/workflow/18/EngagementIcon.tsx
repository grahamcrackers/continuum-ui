import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const EngagementIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M8.2 26.542c.042.079.183.283.4.589a54.031 54.031 0 0 1 5 8.869H30c1.086-2.954 2.925-8.647 1.637-10.548a4.334 4.334 0 0 0-2.456-1.236 7.9 7.9 0 0 1-.589-.649 3.36 3.36 0 0 0-1.979-1.236 6.772 6.772 0 0 0-1.108-.017 1.377 1.377 0 0 1-1.331-.728 3.128 3.128 0 0 0-1.812-1.108c-.769-.124-1.173.391-1.656.359-.4-.174-.515-1.416-.515-1.416v-8.377a2.071 2.071 0 1 0-4.105 0V22.1a9.733 9.733 0 0 1-.727 3.705c-.114.224-.576.835-.816 1.173a14.139 14.139 0 0 1-3.361-3.6 5.514 5.514 0 0 0-2.52-2.436 1.545 1.545 0 0 0-1.716.225c-1.4.86-.234 2.833.788 4.572.172.298.337.57.466.803Z" />
                <path d="M18 1.5a9.744 9.744 0 0 0-5.25 17.957V16.6a7.5 7.5 0 1 1 10.5 0v2.858A9.744 9.744 0 0 0 18 1.5Z" />
            </svg>
        );
    },
);
