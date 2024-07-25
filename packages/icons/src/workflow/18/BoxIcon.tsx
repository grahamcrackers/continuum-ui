import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BoxIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M16.4 35.594 2.823 28.051A1.6 1.6 0 0 1 2 26.652V13.194l14.4 8ZM33.177 28.051 19.6 35.594v-14.4l14.4-8v13.458a1.6 1.6 0 0 1-.823 1.399ZM24.637 3.717 18.762.535a1.6 1.6 0 0 0-1.524 0L2.592 8.468a.825.825 0 0 0 0 1.451l5.529 2.995ZM33.408 8.468 27.97 5.523l-16.515 9.2L18 18.265l15.408-8.346a.825.825 0 0 0 0-1.451Z" />
            </svg>
        );
    },
);
