import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SaveToLightIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M43 12h-6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3v22H6V16h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v28a1 1 0 0 0 1 1h40a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1Z" />
                <path d="M32.586 16H26V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v13h-6.586a1 1 0 0 0-.707 1.707L23 28l10.293-10.293A1 1 0 0 0 32.586 16Z" />
            </svg>
        );
    },
);
