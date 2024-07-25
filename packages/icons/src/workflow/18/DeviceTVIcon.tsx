import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DeviceTVIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M35 8H19.414l6.247-6.247a.971.971 0 0 0 0-1.411 1 1 0 0 0-1.416 0L18 6.586 11.776.362a.99.99 0 0 0-1.42-.006.971.971 0 0 0 .006 1.42L16.586 8H1a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h34a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Zm-5 22H4V12h26Zm4-1a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0Z" />
            </svg>
        );
    },
);
