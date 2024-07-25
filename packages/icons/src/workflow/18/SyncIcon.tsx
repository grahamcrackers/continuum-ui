import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SyncIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M14 27v-6a1 1 0 0 1 1-1h11v-4.793a.5.5 0 0 1 .854-.354L36 24l-9.146 9.146a.5.5 0 0 1-.854-.353V28H15a1 1 0 0 1-1-1ZM22 15V9a1 1 0 0 0-1-1H10V3.207a.5.5 0 0 0-.854-.354L0 12l9.146 9.146a.5.5 0 0 0 .854-.353V16h11a1 1 0 0 0 1-1Z" />
            </svg>
        );
    },
);
