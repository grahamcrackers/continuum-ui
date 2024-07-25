import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const EraseIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18.613 28.132a1 1 0 0 0 1.414 0l13.562-13.561a1 1 0 0 0 0-1.414L22.275 1.843a1 1 0 0 0-1.414 0L7.3 15.4a1 1 0 0 0 0 1.414l.707.707-6.3 6.3a2 2 0 0 0 0 2.829l6.505 6.5a2.8 2.8 0 0 0 1.921.85H33.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H13.331l4.575-4.575ZM10.9 31.607a1 1 0 0 1-1.414 0l-6.368-6.364 6.3-6.3 7.071 7.071Z" />
            </svg>
        );
    },
);
