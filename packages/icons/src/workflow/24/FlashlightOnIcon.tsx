import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FlashlightOnIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m36 27.155-1.392 1.391-15.427-15.427 1.391-1.392a2 2 0 0 1 2.829 0L36 24.326a2 2 0 0 1 0 2.829ZM16.993 15.306l-1.028 1.1a2.185 2.185 0 0 0-.534 1.43l-1.181 9.096L1.184 40a2 2 0 0 0 0 2.827l3.739 3.743a2 2 0 0 0 2.832 0L20.8 33.477l9.09-1.177a2.179 2.179 0 0 0 1.429-.533l1.1-1.028Zm.148 18.108-3 3a2 2 0 0 1-2.828-2.828l3-3a2 2 0 1 1 2.828 2.828ZM28 10a1.964 1.964 0 0 1-.394-.039 2 2 0 0 1-1.569-2.353l1-6A1.876 1.876 0 0 1 29.392.239a1.807 1.807 0 0 1 1.569 2.153l-1 6A2 2 0 0 1 28 10ZM34.827 15.173a2 2 0 0 1-1.414-3.414l5.173-5.173a2 2 0 1 1 2.828 2.828l-5.173 5.173a1.992 1.992 0 0 1-1.414.586ZM40 22a2 2 0 0 1-.39-3.961l6-1a1.806 1.806 0 0 1 2.153 1.569 1.875 1.875 0 0 1-1.369 2.353l-6 1A1.964 1.964 0 0 1 40 22Z" />
            </svg>
        );
    },
);
