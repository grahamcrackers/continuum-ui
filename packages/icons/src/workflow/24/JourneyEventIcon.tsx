import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const JourneyEventIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M36 24a12 12 0 1 0 12 12 12 12 0 0 0-12-12Zm5.119 12.938-7.434 8.5a.769.769 0 0 1-1.288-.8l2.508-5.955-3.548-1.523a1.328 1.328 0 0 1-.475-2.094l7.434-8.5a.769.769 0 0 1 1.288.8L37.1 33.322l3.548 1.523a1.328 1.328 0 0 1 .471 2.093Z" />
                <path d="M20 34a7.991 7.991 0 0 0 .055.908A15.916 15.916 0 0 1 24 25.441V14a4 4 0 0 1 4-4h6.349a6 6 0 1 0 0-4H28a8 8 0 0 0-8 8v8h-6.349a6 6 0 1 0 0 4H20ZM40 5.6A2.4 2.4 0 1 1 37.6 8 2.4 2.4 0 0 1 40 5.6ZM8 26.4a2.4 2.4 0 1 1 2.4-2.4A2.4 2.4 0 0 1 8 26.4Z" />
            </svg>
        );
    },
);
