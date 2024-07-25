import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const EventExcludeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M36 24.1A11.9 11.9 0 1 0 47.9 36 11.9 11.9 0 0 0 36 24.1ZM44.924 36a8.858 8.858 0 0 1-1.663 5.158l-12.42-12.42A8.9 8.9 0 0 1 44.924 36Zm-17.85 0a8.858 8.858 0 0 1 1.663-5.158l12.42 12.42A8.9 8.9 0 0 1 27.074 36ZM4 4h24v18.274a15.779 15.779 0 0 1 4-1.647V0H0v32h8v-4H4Z" />
                <path d="M27.365 22.66 12.854 8.2a.488.488 0 0 0-.35-.147.5.5 0 0 0-.5.5v26.782a.5.5 0 0 0 .5.5.488.488 0 0 0 .35-.147L20 28.535l1.958.011a15.964 15.964 0 0 1 5.407-5.886Z" />
            </svg>
        );
    },
);
