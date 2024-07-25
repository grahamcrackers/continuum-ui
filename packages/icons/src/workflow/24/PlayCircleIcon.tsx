import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PlayCircleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24 4.1A19.9 19.9 0 1 0 43.9 24 19.9 19.9 0 0 0 24 4.1Zm10.531 20.762L19.486 33.7a2 2 0 0 1-1.06.3H17a1 1 0 0 1-1-1V15a1 1 0 0 1 1-1h1.426a2 2 0 0 1 1.06.3l15.045 8.834a1 1 0 0 1 0 1.728Z" />
            </svg>
        );
    },
);
