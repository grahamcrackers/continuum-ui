import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const UserArrowIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M10.874 19.622a.5.5 0 0 0-.874.332V24H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h7v3.818a.5.5 0 0 0 .874.332L18 27ZM26.255 19.775a1.438 1.438 0 0 1-1.244-1.443v-2.083a1.441 1.441 0 0 1 .367-.93 11 11 0 0 0 2.5-6.866c0-5.2-2.756-8.1-6.919-8.1s-7 3.018-7 8.1a11.124 11.124 0 0 0 2.645 6.893 1.388 1.388 0 0 1 .344.9v2.126a1.4 1.4 0 0 1-1.368 1.394L22.569 27l-2.99 3h16.357l.011-1.526c0-2.163-1.478-7.865-9.692-8.699Z" />
            </svg>
        );
    },
);
