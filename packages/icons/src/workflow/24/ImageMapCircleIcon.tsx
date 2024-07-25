import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ImageMapCircleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M42 15.556V7a1 1 0 0 0-1-1h-8.556a19.713 19.713 0 0 0-16.888 0H7a1 1 0 0 0-1 1v8.556a19.709 19.709 0 0 0 0 16.888V41a1 1 0 0 0 1 1h8.556a19.713 19.713 0 0 0 16.889 0H41a1 1 0 0 0 1-1v-8.556a19.709 19.709 0 0 0 0-16.888ZM34 10h4v4h-4Zm-24 0h4v4h-4Zm4 28h-4v-4h4Zm24 0h-4v-4h4Zm-7-8a1 1 0 0 0-1 1v7.929a15.954 15.954 0 0 1-12 0V31a1 1 0 0 0-1-1H9.071a15.96 15.96 0 0 1 0-12H17a1 1 0 0 0 1-1V9.071a15.954 15.954 0 0 1 12 0V17a1 1 0 0 0 1 1h7.929a15.96 15.96 0 0 1 0 12Z" />
            </svg>
        );
    },
);
