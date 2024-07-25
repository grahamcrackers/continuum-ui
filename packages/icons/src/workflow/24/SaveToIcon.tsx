import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SaveToIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m24.354 26.854 9.351-9.147A1 1 0 0 0 33 16h-5V3a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v13h-5a1 1 0 0 0-.707 1.707l9.353 9.147a.5.5 0 0 0 .708 0Z" />
                <path d="M42 12h-5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3v24H8V16h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H6a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2Z" />
            </svg>
        );
    },
);
