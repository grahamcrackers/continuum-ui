import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AnnotateIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24 32v-7a1 1 0 0 1 1-1h7a1.161 1.161 0 0 1-.254.854l-6.892 6.892A1.161 1.161 0 0 1 24 32Z" />
                <path d="M31 4H5a1 1 0 0 0-1 1v26a1 1 0 0 0 1 1h17v-8a2 2 0 0 1 2-2h8V5a1 1 0 0 0-1-1ZM18 24h-8v-2h8Zm8-6H10v-2h16Zm0-6H10v-2h16Z" />
            </svg>
        );
    },
);
