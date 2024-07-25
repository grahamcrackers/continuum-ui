import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FlashlightOffIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m40 23.155-1.392 1.391L23.181 9.118l1.391-1.391a2 2 0 0 1 2.829 0L40 20.326a2 2 0 0 1 0 2.829ZM20.993 11.306l-1.028 1.1a2.184 2.184 0 0 0-.533 1.43l-1.182 9.096L3.184 38a2 2 0 0 0 0 2.827l3.739 3.743a2 2 0 0 0 2.832 0L24.8 29.477l9.09-1.177a2.179 2.179 0 0 0 1.429-.533l1.1-1.028Zm.148 18.108-3 3a2 2 0 0 1-2.828-2.828l3-3a2 2 0 0 1 2.828 2.828Z" />
            </svg>
        );
    },
);
