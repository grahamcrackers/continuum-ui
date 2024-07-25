import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const LockOpenIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M29 16H11.9v-5.648A6.213 6.213 0 0 1 18 4a6.142 6.142 0 0 1 5.507 3.419c.31.639.266 1.146.777 1.146a.508.508 0 0 0 .186-.036l2.682-1.069a.514.514 0 0 0 .322-.471C27.474 5.513 24.167.2 18 .2 11.143.2 8 6.505 8 10.292V16H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V17a1 1 0 0 0-1-1Zm-9 10.222V29a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2.778a3 3 0 1 1 4 0Z" />
            </svg>
        );
    },
);
