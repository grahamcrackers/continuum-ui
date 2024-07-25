import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const MonitoringIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M44 4H4a2 2 0 0 0-2 2v26a2 2 0 0 0 2 2h14v4a2.006 2.006 0 0 1-2 2h-3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-3a2.006 2.006 0 0 1-2-2v-4h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm-2 19.445H32a1.779 1.779 0 0 1-1.59-.983l-2.959-5.919-5.463 9.557a1.778 1.778 0 0 1-1.544.9H20.4a1.78 1.78 0 0 1-1.542-.983l-2.371-4.743-1.367 1.563a1.776 1.776 0 0 1-1.338.608H6v-3.556h6.97l2.58-2.948a1.8 1.8 0 0 1 1.565-.594 1.783 1.783 0 0 1 1.364.969l2.07 4.14 5.463-9.56A1.834 1.834 0 0 1 27.6 11a1.78 1.78 0 0 1 1.542.983l3.958 7.906H42Z" />
            </svg>
        );
    },
);
