import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SwitchIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M34.854 10.854a.5.5 0 0 0-.854.353V18H14v-6.793a.5.5 0 0 0-.854-.353L.6 23l12.546 12.146a.5.5 0 0 0 .854-.353V28h20v6.793a.5.5 0 0 0 .854.353L47.4 23Z" />
            </svg>
        );
    },
);
