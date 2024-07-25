import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const MoreCircleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24 4a20 20 0 1 0 20 20A20 20 0 0 0 24 4ZM12.775 28.239A4.239 4.239 0 1 1 17.014 24a4.239 4.239 0 0 1-4.239 4.239Zm11.225 0A4.239 4.239 0 1 1 28.238 24 4.239 4.239 0 0 1 24 28.239Zm11.028 0A4.239 4.239 0 1 1 39.266 24a4.239 4.239 0 0 1-4.238 4.239Z" />
            </svg>
        );
    },
);
