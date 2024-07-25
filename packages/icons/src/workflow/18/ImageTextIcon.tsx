import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ImageTextIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M35 18H17a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1h4v10h-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1V22h4v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Z" />
                <path d="M31 2H3a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h11v-8a2 2 0 0 1 2-2h2.687l-5.415-5.414a2 2 0 0 0-2.828 0L4 17.029V4h26v12h2V3a1 1 0 0 0-1-1Z" />
                <circle cx="24.7" cy="9.3" r="2.7" />
            </svg>
        );
    },
);
