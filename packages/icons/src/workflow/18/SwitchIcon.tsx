import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SwitchIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m36 18-9.146-9.146a.5.5 0 0 0-.854.353V14H10V9.207a.5.5 0 0 0-.854-.354L0 18l9.146 9.146a.5.5 0 0 0 .854-.353V22h16v4.793a.5.5 0 0 0 .854.354Z" />
            </svg>
        );
    },
);
