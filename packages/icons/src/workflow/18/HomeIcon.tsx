import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const HomeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path
                    d="M35.332 20.25 18.75 3.668a1.063 1.063 0 0 0-1.5 0L.668 20.25a1.061 1.061 0 0 0 0 1.5l1.958 1.957a1 1 0 0 0 .707.293H4v9a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V23a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-9h.667a1 1 0 0 0 .707-.293l1.958-1.957a1.061 1.061 0 0 0 0-1.5Z"
                    fillRule="evenodd"
                />
            </svg>
        );
    },
);
