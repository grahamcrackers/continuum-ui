import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const VignetteIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M4 5.818v36.364A1.818 1.818 0 0 0 5.818 44h36.364A1.818 1.818 0 0 0 44 42.182V5.818A1.818 1.818 0 0 0 42.182 4H5.818A1.818 1.818 0 0 0 4 5.818ZM40 40H8V8h32Z" />
                <path d="M21.115 10H10v11.115A14.31 14.31 0 0 1 21.115 10ZM38 21.115V10H26.885A14.31 14.31 0 0 1 38 21.115ZM26.885 38H38V26.885A14.31 14.31 0 0 1 26.885 38ZM10 26.885V38h11.115A14.31 14.31 0 0 1 10 26.885Z" />
            </svg>
        );
    },
);
