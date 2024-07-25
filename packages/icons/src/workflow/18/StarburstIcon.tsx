import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const StarburstIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m18.1 3.325 2.52 7.087 6.793-3.229a.5.5 0 0 1 .666.666l-3.229 6.793 7.087 2.52a.5.5 0 0 1 0 .942l-7.087 2.52 3.229 6.793a.5.5 0 0 1-.666.666l-6.793-3.229-2.52 7.088a.5.5 0 0 1-.942 0l-2.52-7.087-6.789 3.229a.5.5 0 0 1-.666-.666l3.229-6.793L3.325 18.1a.5.5 0 0 1 0-.942l7.087-2.52-3.229-6.789a.5.5 0 0 1 .666-.666l6.793 3.229 2.52-7.087a.5.5 0 0 1 .938 0Z" />
            </svg>
        );
    },
);
