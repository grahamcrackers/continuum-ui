import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ResizeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M42.571 4H5.429A1.428 1.428 0 0 0 4 5.429v37.142A1.428 1.428 0 0 0 5.429 44h37.142A1.428 1.428 0 0 0 44 42.571V5.429A1.428 1.428 0 0 0 42.571 4ZM40 40H24V28.041l6.877-6.878 3.416 3.416A1 1 0 0 0 36 23.872V12H24.129a1 1 0 0 0-.707 1.707l3.415 3.416L19.959 24H8V8h32Z" />
            </svg>
        );
    },
);
