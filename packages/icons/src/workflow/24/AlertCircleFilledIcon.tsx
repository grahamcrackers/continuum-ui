import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AlertCircleFilledIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24 4a20 20 0 1 0 20 20A20 20 0 0 0 24 4Zm-2.86 6.955a.594.594 0 0 1 .278-.588 7.4 7.4 0 0 1 2.563-.517 8.042 8.042 0 0 1 2.594.391.666.666 0 0 1 .332.589v2.981c0 3.518-.7 13.231-.83 14.511 0 .242-.155.385-.439.385h-3.313a.418.418 0 0 1-.435-.365c-.12-1.62-.75-11.05-.75-14.406Zm2.841 27.2a2.872 2.872 0 0 1-3.131-2.926 2.97 2.97 0 0 1 3.131-3.006 2.938 2.938 0 0 1 3.132 3.006 2.843 2.843 0 0 1-3.132 2.921Z" />
            </svg>
        );
    },
);
