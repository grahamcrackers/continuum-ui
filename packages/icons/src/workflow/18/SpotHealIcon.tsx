import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SpotHealIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M32.728 3.272a6 6 0 0 0-8.485 0l-6.456 6.456L3.272 24.243a6 6 0 0 0 8.485 8.485l5.943-5.947 15.028-15.024a6 6 0 0 0 0-8.485ZM19 11a2 2 0 1 1-2 2 2 2 0 0 1 2-2Zm-6 10a2 2 0 1 1 2-2 2 2 0 0 1-2 2Zm4 4a2 2 0 1 1 2-2 2 2 0 0 1-2 2Zm6-6a2 2 0 1 1 2-2 2 2 0 0 1-2 2ZM18.453 4.343l1.309-1.512A11.923 11.923 0 0 0 14.449.182l-.42 1.955a9.98 9.98 0 0 1 4.424 2.206Zm-7.742-2.358L10.472 0h-.007a12.1 12.1 0 0 0-5.519 2.144H4.94L6.1 3.776a9.988 9.988 0 0 1 4.611-1.791Zm-8.725 8.761A9.99 9.99 0 0 1 3.757 6.13l-1.63-1.159A11.958 11.958 0 0 0 0 10.514Zm2.389 7.732a9.979 9.979 0 0 1-2.224-4.416L.2 14.49a11.933 11.933 0 0 0 2.671 5.3Z" />
            </svg>
        );
    },
);
