import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DeduplicationIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <circle cx="9" cy="7" r="5" />
                <path d="M28.756 12H17.09l5.833-10 5.833 10z" />
                <circle cx="17.333" cy="41" r="5" />
                <path d="M36.886 46H25.219l5.834-10 5.833 10zM42.91 12H31.244l5.833-10 5.833 10zM38 16.077H10v2.759a2 2 0 0 0 1.012 1.739l7.429 4.225A4 4 0 0 1 20 27.968V33a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-5.032a4 4 0 0 1 1.559-3.168l7.429-4.224A2 2 0 0 0 38 18.836Z" />
            </svg>
        );
    },
);
