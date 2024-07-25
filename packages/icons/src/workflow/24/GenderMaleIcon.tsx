import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GenderMaleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <circle cx="24" cy="4.913" r="4.913" />
                <path d="M24.29 12h-.58c-4.645 0-8.41 2.257-8.41 6.785V30a1.222 1.222 0 0 0 1.243 1.2h2.2l1.374 15.755A1.229 1.229 0 0 0 21.346 48h5.293a1.229 1.229 0 0 0 1.232-1.044L29.252 31.2h2.205A1.222 1.222 0 0 0 32.7 30V18.785c0-4.528-3.765-6.785-8.41-6.785Z" />
            </svg>
        );
    },
);
