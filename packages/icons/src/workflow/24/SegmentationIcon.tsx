import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SegmentationIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <circle cx="24" cy="24" r="6.25" />
                <path d="M40.525 9.509A21.94 21.94 0 0 0 26 2.1v9.574a12.433 12.433 0 0 1 6.785 3.463ZM35.133 18.376A12.438 12.438 0 0 1 36.318 22h9.587a21.85 21.85 0 0 0-3.019-9.262ZM11.242 41.9l4.813-8.251A12.489 12.489 0 0 1 22 11.675V2.1a21.978 21.978 0 0 0-10.758 39.8ZM36.325 26a12.46 12.46 0 0 1-16.81 9.657L14.7 43.915A21.95 21.95 0 0 0 45.9 26Z" />
            </svg>
        );
    },
);
