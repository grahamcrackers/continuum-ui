import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GraphBarVerticalAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M36.1 24.1A11.9 11.9 0 1 0 48 36a11.9 11.9 0 0 0-11.9-11.9Zm8 13.4a.5.5 0 0 1-.5.5h-5.5v5.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V38h-5.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h5.5v-5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V34h5.5a.5.5 0 0 1 .5.5ZM31.539 20.772A1.963 1.963 0 0 0 30 20h-4a2 2 0 0 0-2 2v3.7a15.9 15.9 0 0 1 7.539-4.928ZM6 32a2 2 0 0 0-2 2v4h8v-4a2 2 0 0 0-2-2ZM1 44h21.375a15.8 15.8 0 0 1-1.647-4H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1ZM42 6a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v14.254a15.4 15.4 0 0 1 8 .989ZM20 28h-4a2 2 0 0 0-2 2v8h6.339a16.091 16.091 0 0 1-.139-2 15.8 15.8 0 0 1 1.579-6.873A1.986 1.986 0 0 0 20 28Z" />
            </svg>
        );
    },
);
