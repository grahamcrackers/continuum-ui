import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TargetedIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M17.225 15.281 12 10.056V6.847a2 2 0 0 0-.586-1.415L6.854.239A.5.5 0 0 0 6 .592L4.5 4.5.6 6.018a.5.5 0 0 0-.354.854l5.173 4.56A1.98 1.98 0 0 0 6.828 12h3.173l5.262 5.251a.693.693 0 0 0 .981 0l.981-.981a.693.693 0 0 0 0-.989ZM19.328 14.243a3.057 3.057 0 0 1-.449 3.7l-.982.982a3.052 3.052 0 0 1-3.611.543 3.994 3.994 0 1 0 5.042-5.223Z" />
                <path d="M18 2.1a15.824 15.824 0 0 0-5.5 1l.675.781A4.343 4.343 0 0 1 14.379 6.9v1.659a10.24 10.24 0 1 1-5.833 5.863H6.855A4.339 4.339 0 0 1 3.827 13.2l-.747-.658A15.891 15.891 0 1 0 18 2.1Z" />
            </svg>
        );
    },
);
