import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BlurIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M19.963.633c1.79 12.273-10.281 21.585-10.281 31.419 0 7.342 6.41 13.3 14.318 13.3s14.318-5.953 14.318-13.3c0-9.885-14.295-20.915-18-31.49-.097-.282-.355.071-.355.071Z" />
            </svg>
        );
    },
);
