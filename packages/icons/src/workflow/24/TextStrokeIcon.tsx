import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TextStrokeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M36 9v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3h-6v24h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H17a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h3V12h-6v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h24a1 1 0 0 1 1 1ZM8 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8v12h-2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-2V20h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z" />
            </svg>
        );
    },
);
