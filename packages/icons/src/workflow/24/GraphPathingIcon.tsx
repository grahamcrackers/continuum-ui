import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GraphPathingIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="16" rx="1.069" ry="1.069" width="8" x="4" y="4" />
                <rect height="10" rx="1" ry="1" width="10" x="36" y="6" />
                <rect height="10" rx="1" ry="1" width="10" x="36" y="20" />
                <rect height="10" rx="1" ry="1" width="10" x="36" y="34" />
                <path d="M34 10.452a1.006 1.006 0 0 1-1.053 1.01 25.556 25.556 0 0 1-6.6-1.634 34.564 34.564 0 0 0-11.355-2.315A1.007 1.007 0 0 1 14 6.522v-1a1.019 1.019 0 0 1 1.037-1.009 37.581 37.581 0 0 1 12.289 2.479 23.5 23.5 0 0 0 5.721 1.468 1.008 1.008 0 0 1 .953.992ZM34 24.416a.982.982 0 0 1-1.142 1c-3.2-.48-5.277-2.943-7.291-5.334-2.584-3.069-5.253-6.237-10.66-6.556a.981.981 0 0 1-.907-.987v-1a1.015 1.015 0 0 1 1.082-1.006c6.693.39 10.054 4.379 12.78 7.617 2 2.371 3.406 3.936 5.318 4.28a.992.992 0 0 1 .82.97ZM34 38.387a.99.99 0 0 1-1.167.989c-3.548-.769-5.935-5-8.448-9.45-2.694-4.773-5.474-9.7-9.478-10.352A1.1 1.1 0 0 1 14 18.53v-.96a.984.984 0 0 1 1.13-1c5.564.711 8.9 6.625 11.868 11.88 2.009 3.56 4.08 7.229 6.266 7.929a1.072 1.072 0 0 1 .736.953Z" />
            </svg>
        );
    },
);
