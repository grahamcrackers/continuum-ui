import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ImageMapCircleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M32 10.461V4.5a.5.5 0 0 0-.5-.5h-5.961a15.907 15.907 0 0 0-15.078 0H4.5a.5.5 0 0 0-.5.5v5.961a15.906 15.906 0 0 0 0 15.078V31.5a.5.5 0 0 0 .5.5h5.961a15.907 15.907 0 0 0 15.078 0H31.5a.5.5 0 0 0 .5-.5v-5.961a15.906 15.906 0 0 0 0-15.079ZM26 6h4v4h-4ZM6 6h4v4H6Zm4 24H6v-4h4Zm20 0h-4v-4h4Zm.537-6H24.5a.5.5 0 0 0-.5.5v6.038a13.778 13.778 0 0 1-12 0V24.5a.5.5 0 0 0-.5-.5H5.463a13.778 13.778 0 0 1 0-12H11.5a.5.5 0 0 0 .5-.5V5.462a13.778 13.778 0 0 1 12 0V11.5a.5.5 0 0 0 .5.5h6.037a13.778 13.778 0 0 1 0 12Z" />
            </svg>
        );
    },
);
