import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const RSSIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <circle cx="7.993" cy="28.007" r="4" />
                <path d="M21.983 32.007h-4a.5.5 0 0 1-.5-.489 13.519 13.519 0 0 0-13-13 .5.5 0 0 1-.488-.5v-4a.5.5 0 0 1 .511-.5A18.525 18.525 0 0 1 22.486 31.5a.5.5 0 0 1-.503.507Z" />
                <path d="M31.985 32.007h-4a.5.5 0 0 1-.5-.493 23.7 23.7 0 0 0-23-23.19.5.5 0 0 1-.493-.5V4.015a.5.5 0 0 1 .51-.5A28.535 28.535 0 0 1 32.489 31.5a.5.5 0 0 1-.504.507Z" />
            </svg>
        );
    },
);
