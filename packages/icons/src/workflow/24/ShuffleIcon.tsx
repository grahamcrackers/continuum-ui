import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ShuffleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M3 16h7l3.6 5.4 3.5-5.25-3.5-5.254A2 2 0 0 0 11.93 10H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1ZM38 16v5.2a.8.8 0 0 0 .8.8.787.787 0 0 0 .527-.2l8.524-8.445a.5.5 0 0 0 0-.7L39.332 4.2a.787.787 0 0 0-.527-.2.8.8 0 0 0-.8.8V10H27.07a2 2 0 0 0-1.664.891L10 34H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h8.93a2 2 0 0 0 1.664-.891L29 16Z" />
                <path d="M39.332 28.2a.787.787 0 0 0-.527-.2.8.8 0 0 0-.8.8V34H29l-3.6-5.394-3.5 5.25 3.5 5.253a2 2 0 0 0 1.67.891H38v5.2a.8.8 0 0 0 .8.8.787.787 0 0 0 .527-.2l8.524-8.445a.5.5 0 0 0 0-.7Z" />
            </svg>
        );
    },
);
