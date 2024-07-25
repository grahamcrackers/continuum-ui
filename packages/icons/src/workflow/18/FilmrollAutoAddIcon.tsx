import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FilmrollAutoAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M32 26v-3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3h-3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" />
                <rect height="22" rx="1" ry="1" width="14" y="8" />
                <path d="M20 24a5.015 5.015 0 0 1 5-5h1a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H16v18h2a2 2 0 0 0 2-2ZM10 6V4a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2Z" />
            </svg>
        );
    },
);
