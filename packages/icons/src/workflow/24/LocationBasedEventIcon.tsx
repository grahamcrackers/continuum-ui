import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const LocationBasedEventIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M14 15.078A11.678 11.678 0 0 0 2.322 26.756C2.322 33.205 14 47.922 14 47.922s11.678-14.717 11.678-21.166A11.678 11.678 0 0 0 14 15.078Zm0 16.2a4.525 4.525 0 1 1 4.525-4.525A4.525 4.525 0 0 1 14 31.281ZM30.5 18a.494.494 0 0 0-.5.5v24.782a.494.494 0 0 0 .846.353L38 36h8.506c.446 0 .479-.78.225-1.033S30.846 18.148 30.846 18.148A.49.49 0 0 0 30.5 18Z" />
                <path d="M4 4v10.755a15.241 15.241 0 0 1 4-2.526V8h30v12l4 4V4Z" />
            </svg>
        );
    },
);
