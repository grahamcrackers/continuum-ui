import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ImageMapRectangleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M33.5 10a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V4H10V2.5a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5H4v16H2.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V32h16v1.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H32V10ZM4 4h4v4H4Zm4 28H4v-4h4Zm18-5.5V30H10v-3.5a.5.5 0 0 0-.5-.5H6V10h3.5a.5.5 0 0 0 .5-.5V6h16v3.5a.5.5 0 0 0 .5.5H30v16h-3.5a.5.5 0 0 0-.5.5Zm6 5.5h-4v-4h4ZM28 8V4h4v4Z" />
            </svg>
        );
    },
);
