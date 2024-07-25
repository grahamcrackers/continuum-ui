import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const RectSelectIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M10 4h6v2h-6zM20 4h6v2h-6zM3 4a1 1 0 0 0-1 1v3h2V6h2V4ZM2 12h2v4H2zM2 20h2v4H2zM4 30v-2H2v3a1 1 0 0 0 1 1h3v-2ZM10 30h6v2h-6zM20 30h6v2h-6zM30 4v2h2v2h2V5a1 1 0 0 0-1-1ZM32 12h2v4h-2zM32 20h2v4h-2zM32 28v2h-2v2h3a1 1 0 0 0 1-1v-3Z" />
            </svg>
        );
    },
);
