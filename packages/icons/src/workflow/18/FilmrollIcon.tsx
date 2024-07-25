import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FilmrollIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="22" rx="1" ry="1" width="14" x="4" y="8" />
                <path d="M26 24a5.015 5.015 0 0 1 5-5h1a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H20v18h3a3 3 0 0 0 3-3ZM14 6V4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2Z" />
            </svg>
        );
    },
);
