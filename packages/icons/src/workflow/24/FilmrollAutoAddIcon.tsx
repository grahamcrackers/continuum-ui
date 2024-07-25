import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FilmrollAutoAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="28" rx="2" ry="2" width="18" x="4" y="12" />
                <path d="M30 29a5.015 5.015 0 0 1 5-5h3a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H26v22h2a2 2 0 0 0 2-2ZM18 8V5a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3ZM42 36v-5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v5h-5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-5h5a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" />
            </svg>
        );
    },
);
