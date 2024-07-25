import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FeedIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M31 30H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h26a1 1 0 0 1 1 1v24a1 1 0 0 1-1 1ZM30 6H6v6h24Zm0 8H6v6h24Zm0 8H6v6h24Z" />
            </svg>
        );
    },
);
