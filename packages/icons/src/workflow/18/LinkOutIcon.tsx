import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const LinkOutIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M33 18h-2a1 1 0 0 0-1 1v11H6V6h11a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V19a1 1 0 0 0-1-1Z" />
                <path d="M33.5 2H22.754a.8.8 0 0 0-.754.8.784.784 0 0 0 .235.56l3.786 3.79-7.042 7.042a1 1 0 0 0 0 1.415l1.414 1.414a1 1 0 0 0 1.414 0l7.043-7.042 3.786 3.785A.781.781 0 0 0 33.2 14a.8.8 0 0 0 .8-.754V2.5a.5.5 0 0 0-.5-.5Z" />
            </svg>
        );
    },
);
