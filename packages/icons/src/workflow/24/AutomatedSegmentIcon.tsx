import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AutomatedSegmentIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m44.192 18.32.1 2.872a2.34 2.34 0 0 0 1.2 1.959l2.508 1.4-2.872.1a2.34 2.34 0 0 0-1.959 1.2l-1.4 2.508-.1-2.872a2.34 2.34 0 0 0-1.2-1.959l-2.506-1.4 2.872-.1a2.34 2.34 0 0 0 1.959-1.2ZM8.693 0l.145 4a3.264 3.264 0 0 0 1.667 2.73L14 8.692l-4 .145A3.264 3.264 0 0 0 7.266 10.5L5.308 14l-.145-4A3.264 3.264 0 0 0 3.5 7.265L0 5.307l4-.145A3.264 3.264 0 0 0 6.734 3.5ZM36 10a2 2 0 0 0-2-2H19.209v1.443a1.957 1.957 0 0 1-1.913 2l-6.574.237a1.537 1.537 0 0 0-1.286.785L8 15.021V44a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2Zm-24 4h6v4h-6Zm0 8h10v4H12Zm0 8h14v4H12Zm20 12H12v-4h20ZM41.7 2.226l.38 2.848a2.339 2.339 0 0 0 1.386 1.832L46.1 8.055l-2.849.38a2.339 2.339 0 0 0-1.832 1.386l-1.148 2.633-.381-2.849a2.34 2.34 0 0 0-1.39-1.832l-2.631-1.149 2.848-.38a2.339 2.339 0 0 0 1.832-1.386Z" />
            </svg>
        );
    },
);
