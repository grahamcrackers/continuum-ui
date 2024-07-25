import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ViewedMarkAsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M30.635 21.148A6.746 6.746 0 0 0 30.75 20a6.269 6.269 0 0 0-.233-1.594 3.5 3.5 0 0 1-2.961 1.705A3.556 3.556 0 0 1 24 16.556a3.507 3.507 0 0 1 1.8-3.026 6.545 6.545 0 0 0-1.8-.28 6.732 6.732 0 0 0-.781 13.421 15.908 15.908 0 0 1 7.416-5.523Z" />
                <path d="M20.7 31.838A12.3 12.3 0 1 1 36.3 20c0 .072-.01.143-.011.215a15.8 15.8 0 0 1 8.073 2.38A5.072 5.072 0 0 0 45 20.48c0-3.152-5.619-9.788-12.183-13.04A19.965 19.965 0 0 0 24 5.249c-11.552 0-21 11.5-21 15.231 0 3.538 7.8 11.984 17.2 13.877a15.672 15.672 0 0 1 .5-2.519Z" />
                <path d="M36 24.1A11.9 11.9 0 1 0 47.9 36 11.9 11.9 0 0 0 36 24.1Zm-2.229 19.8-6.133-6.133a.5.5 0 0 1 0-.707L29.4 35.3a.5.5 0 0 1 .707 0L34 39.188l8.939-8.94a.5.5 0 0 1 .707 0l1.887 1.887a.5.5 0 0 1 0 .707L34.479 43.9a.5.5 0 0 1-.708 0Z" />
            </svg>
        );
    },
);
