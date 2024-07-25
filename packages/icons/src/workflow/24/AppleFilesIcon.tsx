import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AppleFilesIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m18.1 9.277-3.2-2.554A3.3 3.3 0 0 0 12.842 6H5.3A3.3 3.3 0 0 0 2 9.3v29.4A3.3 3.3 0 0 0 5.3 42h37.4a3.3 3.3 0 0 0 3.3-3.3V13.3a3.3 3.3 0 0 0-3.3-3.3H20.158a3.3 3.3 0 0 1-2.058-.723ZM42 18H6v-2a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2Z" />
            </svg>
        );
    },
);
