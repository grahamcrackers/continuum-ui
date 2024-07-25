import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PlugIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M3.355 25.983a6.119 6.119 0 0 1 0-8.653l5.288-5.288-.034-.034a2.719 2.719 0 0 1 0-3.846l1.923-1.923a2.719 2.719 0 0 1 3.846 0L16.3 8.162l6.523-6.523a1.02 1.02 0 0 1 1.442 0l1.442 1.442a1.02 1.02 0 0 1 0 1.442l-6.524 6.524 5.769 5.769 6.524-6.524a1.02 1.02 0 0 1 1.442 0l1.442 1.442a1.02 1.02 0 0 1 0 1.442L27.838 19.7l1.923 1.923a2.719 2.719 0 0 1 0 3.846l-1.923 1.923a2.719 2.719 0 0 1-3.846 0l-.059-.059-5.288 5.287a6.118 6.118 0 0 1-8.653 0Z" />
            </svg>
        );
    },
);
