import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AnswerIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M33 2H3a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h11l3.536 6.839a.5.5 0 0 0 .928 0L22 28h11a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM15.534 5.575a.306.306 0 0 1 .189-.336A7.962 7.962 0 0 1 18 4.873a9.1 9.1 0 0 1 2.311.274.366.366 0 0 1 .227.336v2.2c0 2.567-.643 9.216-.756 10.133 0 .092-.04.184-.266.184h-3.035a.24.24 0 0 1-.265-.184c-.075-.855-.682-7.475-.682-10.041ZM18 24.729a2.519 2.519 0 0 1-2.7-2.661 2.624 2.624 0 0 1 2.7-2.739 2.582 2.582 0 0 1 2.7 2.739 2.52 2.52 0 0 1-2.7 2.661Z" />
            </svg>
        );
    },
);
