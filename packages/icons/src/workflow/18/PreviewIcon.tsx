import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PreviewIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M33.191 32.143 28.646 27.6a9.065 9.065 0 1 0-3.046 3.046l4.546 4.545a2.044 2.044 0 0 0 3.048 0A2.133 2.133 0 0 0 33.781 34a2.163 2.163 0 0 0-.59-1.857ZM15.412 22.98a5.568 5.568 0 1 1 5.568 5.568 5.568 5.568 0 0 1-5.568-5.568Z" />
                <path d="M33 4H3a1 1 0 0 0-1 1v26a1 1 0 0 0 1 1h11.232a11.322 11.322 0 0 1-2.068-2H4V10h28v17.777l2 1.99V5a1 1 0 0 0-1-1Z" />
            </svg>
        );
    },
);
