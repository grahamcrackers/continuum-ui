import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PlayIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M10.853 4H8a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h2.853a4.005 4.005 0 0 0 2.12-.608l30.09-17.667a2 2 0 0 0 0-3.45L12.973 4.608A4.005 4.005 0 0 0 10.853 4Z" />
            </svg>
        );
    },
);
