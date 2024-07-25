import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ViewDetailIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M35.191 32.143 30.646 27.6a9.066 9.066 0 1 0-3.046 3.046l4.545 4.545a2.044 2.044 0 0 0 3.048 0 2.195 2.195 0 0 0-.002-3.048ZM17.412 22.98a5.568 5.568 0 1 1 5.568 5.567 5.568 5.568 0 0 1-5.568-5.567Z" />
                <path d="M12.878 28H6V6h22v6.878a11.323 11.323 0 0 1 4 3.309V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v28a1 1 0 0 0 1 1h13.188a11.324 11.324 0 0 1-3.31-4Z" />
            </svg>
        );
    },
);
