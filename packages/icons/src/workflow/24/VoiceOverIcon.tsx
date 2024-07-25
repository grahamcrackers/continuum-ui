import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const VoiceOverIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M32 9a9 9 0 0 0-18 0v16a9 9 0 0 0 18 0Z" />
                <path d="M37.5 20H36a.5.5 0 0 0-.5.5V25a12.484 12.484 0 0 1-11.454 12.442l-1.036.086-1.052-.088A12.6 12.6 0 0 1 10.5 25v-4.5a.5.5 0 0 0-.5-.5H8.5a.5.5 0 0 0-.5.5v4.076a15.292 15.292 0 0 0 13.75 15.355V44H13a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-8.75v-4.066A14.992 14.992 0 0 0 38 25v-4.5a.5.5 0 0 0-.5-.5Z" />
            </svg>
        );
    },
);
