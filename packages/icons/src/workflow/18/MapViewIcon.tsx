import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const MapViewIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M25.6 2.106 18 5.905l-7.553-3.777a1 1 0 0 0-.894 0l-7 3.5A1 1 0 0 0 2 6.523v25.764a1 1 0 0 0 1.447.894L10 29.905l7.553 3.776a1 1 0 0 0 .894 0L26 29.905l8.629 3.451A1 1 0 0 0 36 32.428V6.582a1 1 0 0 0-.629-.929l-8.954-3.581a1 1 0 0 0-.817.034ZM18 31.741l-8-4V4l8 4Zm16-.711-8-3.125v-24l8 3.125Z" />
            </svg>
        );
    },
);
