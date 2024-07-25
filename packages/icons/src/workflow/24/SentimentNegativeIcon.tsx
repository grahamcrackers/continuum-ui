import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SentimentNegativeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24 4.1A19.9 19.9 0 1 0 43.9 24 19.9 19.9 0 0 0 24 4.1Zm7 7.9c1.767 0 3.2 1.791 3.2 4s-1.433 4-3.2 4-3.2-1.791-3.2-4 1.433-4 3.2-4Zm-14 0c1.767 0 3.2 1.791 3.2 4s-1.433 4-3.2 4-3.2-1.791-3.2-4 1.433-4 3.2-4Zm19.674 20.763-2.416 1.208a1.157 1.157 0 0 1-1.346-.229 12.381 12.381 0 0 0-8.857-3.336 12.362 12.362 0 0 0-8.889 3.363 1.176 1.176 0 0 1-.84.358 1.144 1.144 0 0 1-.519-.127L11.4 32.8a1.157 1.157 0 0 1-.375-1.773c2.9-3.482 7.768-5.56 13.03-5.56 5.238 0 10.095 2.061 12.992 5.515a1.152 1.152 0 0 1-.373 1.779Z" />
            </svg>
        );
    },
);
