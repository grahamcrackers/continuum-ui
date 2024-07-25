import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SentimentNeutralIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24 4.1A19.9 19.9 0 1 0 43.9 24 19.9 19.9 0 0 0 24 4.1Zm7 7.9c1.767 0 3.2 1.791 3.2 4s-1.433 4-3.2 4-3.2-1.791-3.2-4 1.433-4 3.2-4Zm-14 0c1.767 0 3.2 1.791 3.2 4s-1.433 4-3.2 4-3.2-1.791-3.2-4 1.433-4 3.2-4Zm15 17v2a1 1 0 0 1-1 1H17a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z" />
            </svg>
        );
    },
);
