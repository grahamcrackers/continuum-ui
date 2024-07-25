import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TrainIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M30 0H6a4 4 0 0 0-4 4v20a4 4 0 0 0 4 4h3.976L6.51 36h2.647l.867-2h15.952l.867 2h2.647l-3.466-8H30a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4ZM8 25a3 3 0 1 1 3-3 3 3 0 0 1-3 3Zm2.89 7 1.734-4h10.752l1.734 4ZM7 16a1 1 0 0 1-1-1V4h24v11a1 1 0 0 1-1 1Zm21 9a3 3 0 1 1 3-3 3 3 0 0 1-3 3Z" />
            </svg>
        );
    },
);
