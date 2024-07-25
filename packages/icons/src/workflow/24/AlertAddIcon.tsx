import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AlertAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20.461 32.648a2.556 2.556 0 0 1-.462.093 2.683 2.683 0 0 1 0-5.365 2.637 2.637 0 0 1 2.044 1 15.943 15.943 0 0 1 9.273-7.576l-9.75-17.724a1.789 1.789 0 0 0-3.134 0L1.787 33.34a1.788 1.788 0 0 0 1.567 2.65H20.1a15.93 15.93 0 0 1 .361-3.342Zm-2.607-20.8a.894.894 0 0 1 .894-.894h2.5a.894.894 0 0 1 .894.894v12.519a.894.894 0 0 1-.894.894h-2.5a.894.894 0 0 1-.894-.894Z" />
                <path d="M36 24.1A11.9 11.9 0 1 0 47.9 36 11.9 11.9 0 0 0 36 24.1Zm8 13.4a.5.5 0 0 1-.5.5H38v5.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V38h-5.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H34v-5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V34h5.5a.5.5 0 0 1 .5.5Z" />
            </svg>
        );
    },
);
