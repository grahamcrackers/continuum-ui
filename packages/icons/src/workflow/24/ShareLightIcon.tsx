import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ShareLightIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M45 12h-6.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5H42v22H6V16h3.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5H3a1 1 0 0 0-1 1v28a1 1 0 0 0 1 1h42a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1Z" />
                <path d="M33.722 10.331 24 0l-9.708 10.331A1 1 0 0 0 15.035 12H20v13.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V12h4.979a1 1 0 0 0 .743-1.669Z" />
            </svg>
        );
    },
);
