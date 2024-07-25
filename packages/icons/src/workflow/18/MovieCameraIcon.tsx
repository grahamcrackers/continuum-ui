import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const MovieCameraIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M32.4 10.2 24 16.5V9.818A1.818 1.818 0 0 0 22.182 8H5.818A1.818 1.818 0 0 0 4 9.818v16.364A1.818 1.818 0 0 0 5.818 28h16.364A1.818 1.818 0 0 0 24 26.182V19.5l8.4 6.3A1 1 0 0 0 34 25V11a1 1 0 0 0-1.6-.8Z" />
            </svg>
        );
    },
);
