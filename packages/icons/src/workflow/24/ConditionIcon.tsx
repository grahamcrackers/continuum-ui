import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ConditionIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m36.663 32.639 6.53-6.53a1 1 0 0 0 0-1.415l-2.25-2.25a1 1 0 0 0-1.415 0l-6.53 6.53-6.53-6.53a1 1 0 0 0-1.414 0l-2.25 2.25a1 1 0 0 0 0 1.415l6.53 6.53-6.53 6.53a1 1 0 0 0 0 1.414l2.25 2.25a1 1 0 0 0 1.414 0l6.53-6.53 6.53 6.53a1 1 0 0 0 1.415 0l2.25-2.25a1 1 0 0 0 0-1.414ZM28.64 4.857l-2.623-1.804a1 1 0 0 0-1.39.258L13.155 19.993 6.913 13.75a1 1 0 0 0-1.415 0L3.248 16a1 1 0 0 0 0 1.415l9.798 9.798a1 1 0 0 0 1.531-.14l14.32-20.826a1 1 0 0 0-.258-1.39Z" />
            </svg>
        );
    },
);
