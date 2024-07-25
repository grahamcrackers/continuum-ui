import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BackAndroidIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M47 22H11.029L26.121 6.908a1 1 0 0 0 0-1.414L24.707 4.08a1 1 0 0 0-1.414 0L4.08 23.293a1 1 0 0 0 0 1.414L23.293 43.92a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414L11.029 26H47a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" />
            </svg>
        );
    },
);
