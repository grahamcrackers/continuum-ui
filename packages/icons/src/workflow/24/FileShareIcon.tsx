import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FileShareIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20 4v12H8L20 4z" />
                <path d="M16 31a5 5 0 0 1 5-5h3.139a4.969 4.969 0 0 1 1.186-2.348L34 14.029l6 6.645V6a2 2 0 0 0-2-2H24v14a2 2 0 0 1-2 2H8v22a2 2 0 0 0 2 2h6Z" />
                <path d="M48 31v16a1 1 0 0 1-1 1H21a1 1 0 0 1-1-1V31a1 1 0 0 1 1-1h7v4h-4v10h20V34h-4v-4h7a1 1 0 0 1 1 1Zm-8.278-4.669L34 20l-5.708 6.331A1 1 0 0 0 29.035 28H32v11.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V28h2.979a1 1 0 0 0 .743-1.669Z" />
            </svg>
        );
    },
);
