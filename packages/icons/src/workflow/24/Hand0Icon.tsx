import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const Hand0Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 0 48 48"
                width="48"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M35.713 25.748c-.662-.374-1.366-3.418-4.054-3.418a1.566 1.566 0 0 1-.724-.087c-.167-.107-.6-3.111-3.538-3.111a9.051 9.051 0 0 1-2-.144 3.959 3.959 0 0 0-3.379-2.231c-.279 0-1.666.313-1.707.313-1.513 0-2-1.5-4.352-.946-2.667.628-2.768 3.842-2.768 5.546 0 .806-2.537 3.56-2.537 3.56a6.736 6.736 0 0 0-.663 6.216C11.243 34.611 14.152 44 24.008 44c5.68 0 9.894-2.172 11.393-5.7 1.018-2.95 1.869-6.182 2.185-7.607a4.454 4.454 0 0 0-1.873-4.945Z" />
            </svg>
        );
    },
);
