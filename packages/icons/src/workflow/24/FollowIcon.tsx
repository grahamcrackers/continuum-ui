import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FollowIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m19.658 37.325-.927.12a3.548 3.548 0 0 1-3.975-3.063l-.371-3.33 7.964-1.032.371 3.33a3.548 3.548 0 0 1-3.062 3.975Zm-2.62-33.69c-2.047-2.387-4.338-2.612-5.955 2.409-2.4 10.632-.538 14.923 2.839 21.9l7.964-1.032c-.854-6.592.787-9.552.443-12.2a21.473 21.473 0 0 0-5.291-11.077ZM28.561 45.795l.921.155a3.548 3.548 0 0 0 4.089-2.909l.493-3.25-7.919-1.336-.493 3.25a3.548 3.548 0 0 0 2.909 4.09Zm3.905-33.565c2.134-2.307 4.434-2.445 5.859 2.634 1.987 10.716-.033 14.933-3.674 21.778l-7.919-1.336c1.106-6.555-.421-9.575.024-12.213a21.471 21.471 0 0 1 5.71-10.864Z" />
            </svg>
        );
    },
);
