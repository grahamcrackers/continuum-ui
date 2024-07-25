import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const MeasureIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M25.071 2.444 2.444 25.071a1 1 0 0 0 0 1.414l7.071 7.071a1 1 0 0 0 1.414 0l3.535-3.535-5.3-5.3a.5.5 0 0 1 0-.707l.707-.707a.5.5 0 0 1 .707 0l5.3 5.3 5.657-5.657-3.89-3.889a.5.5 0 0 1 0-.707l.708-.708a.5.5 0 0 1 .707 0l3.889 3.89 5.657-5.657-5.3-5.3a.5.5 0 0 1 0-.707l.707-.707a.5.5 0 0 1 .708 0l5.3 5.3 3.535-3.535a1 1 0 0 0 0-1.414l-7.071-7.072a1 1 0 0 0-1.414 0Z" />
            </svg>
        );
    },
);
