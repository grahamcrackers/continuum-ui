import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GraphTrendIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m42.181 9.083-7.749 11.07L28.6 8.5a1 1 0 0 0-1.834.106l-7.224 22.328-6.713-6.346a1 1 0 0 0-1.347-.061L4.36 30.463a1 1 0 0 0-.36.768v2.575a1 1 0 0 0 1.64.768l6.176-5.146 8.284 8.284a1 1 0 0 0 1.647-.365l6.51-19.71 4.562 10.079a1 1 0 0 0 1.714.126l9.288-13.269A1 1 0 0 0 44 14V9.657a1 1 0 0 0-1.819-.574Z" />
            </svg>
        );
    },
);
