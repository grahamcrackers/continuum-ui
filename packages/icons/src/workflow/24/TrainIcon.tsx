import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TrainIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M38 0H10a6 6 0 0 0-6 6v28a4 4 0 0 0 4 4h32a4 4 0 0 0 4-4V6a6 6 0 0 0-6-6ZM11 34a3 3 0 1 1 3-3 3 3 0 0 1-3 3Zm26 0a3 3 0 1 1 3-3 3 3 0 0 1-3 3Zm3-14a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V4h32ZM32 40l1 2H15l1-2h-4l-4 8h4l2-4h20l2 4h4l-4-8h-4z" />
                <path d="M38 0H10a6 6 0 0 0-6 6v28a4 4 0 0 0 4 4h32a4 4 0 0 0 4-4V6a6 6 0 0 0-6-6ZM11 34a3 3 0 1 1 3-3 3 3 0 0 1-3 3Zm26 0a3 3 0 1 1 3-3 3 3 0 0 1-3 3Zm3-14a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V4h32ZM32 40l1 2H15l1-2h-4l-4 8h4l2-4h20l2 4h4l-4-8h-4z" />
            </svg>
        );
    },
);
