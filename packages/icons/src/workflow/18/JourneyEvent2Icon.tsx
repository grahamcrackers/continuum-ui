import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const JourneyEvent2Icon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M16 26c0 .114.024.222.034.334A10.924 10.924 0 0 1 18 20.687V10a2 2 0 0 1 2-2h4.1a5 5 0 1 0 0-2H20a4 4 0 0 0-4 4v6h-4.1a5 5 0 1 0 0 2H16ZM29 4a3 3 0 1 1-3 3 3 3 0 0 1 3-3ZM7 20a3 3 0 1 1 3-3 3 3 0 0 1-3 3Z" />
            </svg>
        );
    },
);
