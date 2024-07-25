import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ImageTextIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M37.406 14a3.5 3.5 0 1 1-3.5-3.5 3.5 3.5 0 0 1 3.5 3.5ZM25 24a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h6v16h-3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-3V28h6v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Z" />
                <path d="M42 4H6a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h14V24a3.983 3.983 0 0 1 2.166-3.535l-3.643-3.642a2 2 0 0 0-2.828 0L8 24.518V8h32v12h4V6a2 2 0 0 0-2-2Z" />
            </svg>
        );
    },
);
