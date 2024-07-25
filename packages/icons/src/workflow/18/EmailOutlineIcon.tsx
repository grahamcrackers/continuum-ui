import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const EmailOutlineIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M35 4H1a1 1 0 0 0-1 1v26a1 1 0 0 0 1 1h34a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Zm-1 2v1.506L18 19.741 2 7.506V6Zm0 4.023v15.9l-10.4-7.95Zm-21.6 7.95L2 25.923v-15.9ZM2 30v-1.56l12.042-9.208 2.743 2.1a2 2 0 0 0 2.43 0l2.743-2.1L34 28.44V30Z" />
            </svg>
        );
    },
);
