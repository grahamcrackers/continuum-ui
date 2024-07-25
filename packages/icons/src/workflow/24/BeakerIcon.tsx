import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BeakerIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m41.61 40.424-8.963-20.915A8 8 0 0 1 32 16.358V8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H16a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2v8.358a8.014 8.014 0 0 1-.647 3.151L6.389 40.424A4 4 0 0 0 10.066 46h27.867a4 4 0 0 0 3.677-5.576ZM14.272 32l4.78-11.3A12.006 12.006 0 0 0 20 16.022V8h8v8.059a12 12 0 0 0 .919 4.607l2.444 5.879Z" />
            </svg>
        );
    },
);
