import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GraphBarVerticalIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M34 6v32h8V6a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2ZM24 22v16h8V22a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2ZM14 30v8h8v-8a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2ZM4 34v4h8v-4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Z" />
                <rect height="4" rx="1" ry="1" width="44" y="40" />
            </svg>
        );
    },
);
