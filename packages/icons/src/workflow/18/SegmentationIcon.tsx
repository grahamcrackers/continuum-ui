import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SegmentationIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <circle cx="18" cy="18" r="4.201" />
                <path d="M26.149 19.5a8.247 8.247 0 0 1-11.195 6.2l-4.117 6.587A15.969 15.969 0 0 0 33.924 19.5ZM19.5 9.851a8.267 8.267 0 0 1 4.26 2.19l6.319-4.513A15.951 15.951 0 0 0 19.5 2.076ZM31.823 9.97 25.5 14.489a8.222 8.222 0 0 1 .653 2.011h7.775a15.869 15.869 0 0 0-2.105-6.53ZM12.416 24.1A8.26 8.26 0 0 1 16.5 9.851V2.076A15.981 15.981 0 0 0 8.294 30.7Z" />
            </svg>
        );
    },
);
