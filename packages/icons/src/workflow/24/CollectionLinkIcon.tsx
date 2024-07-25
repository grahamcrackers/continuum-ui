import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CollectionLinkIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M19.451 38H18V26h10v1.608l2.915-2.916L33.608 22H32V10h10v9.115a10.019 10.019 0 0 1 4 1.339V8a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h17.117a10.18 10.18 0 0 1 .334-4ZM18 10h10v12H18Zm-4 28H4V26h10Zm0-16H4V10h10Z" />
                <path d="M32.865 35.618a3.18 3.18 0 0 0 .619.9 3.221 3.221 0 0 0 4.549 0l5.308-5.308a3.217 3.217 0 1 0-4.55-4.55l-1.2 1.2a8.6 8.6 0 0 0-3.9-.654l2.826-2.826a6.434 6.434 0 0 1 9.1 9.1l-5.308 5.308a6.4 6.4 0 0 1-9.789-.826Zm-3.173-4.41-5.308 5.308a6.434 6.434 0 0 0 9.1 9.1l2.825-2.826a8.605 8.605 0 0 1-3.9-.654l-1.2 1.2a3.217 3.217 0 1 1-4.55-4.55l5.308-5.308a3.221 3.221 0 0 1 4.55 0 3.179 3.179 0 0 1 .618.9l2.346-2.346a6.4 6.4 0 0 0-9.789-.826Z" />
            </svg>
        );
    },
);
