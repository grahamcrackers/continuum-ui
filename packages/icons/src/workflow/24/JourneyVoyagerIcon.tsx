import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const JourneyVoyagerIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M40 34a6 6 0 0 0-5.651 4H28a4 4 0 0 1-4-4V14a4 4 0 0 1 4-4h6.349a6 6 0 1 0 0-4H28a8 8 0 0 0-8 8v8h-6.349a6 6 0 1 0 0 4H20v8a8 8 0 0 0 8 8h6.349A6 6 0 1 0 40 34Zm0-28.4A2.4 2.4 0 1 1 37.6 8 2.4 2.4 0 0 1 40 5.6ZM8 26.4a2.4 2.4 0 1 1 2.4-2.4A2.4 2.4 0 0 1 8 26.4Zm32 16a2.4 2.4 0 1 1 2.4-2.4 2.4 2.4 0 0 1-2.4 2.4Z" />
            </svg>
        );
    },
);
