import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CompareIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m45.7 42.3-7.161-7.161a10.1 10.1 0 1 0-3.395 3.395L42.3 45.7c.469.469 2.5.89 3.394 0a2.444 2.444 0 0 0 .006-3.4ZM23.8 30a6.2 6.2 0 1 1 6.2 6.2 6.2 6.2 0 0 1-6.2-6.2ZM28 14v2.462a13.273 13.273 0 0 1 8 1.238V6a2 2 0 0 0-2-2H14a2 2 0 0 0-2 2v6h14a2 2 0 0 1 2 2Z" />
                <path d="M16.3 30a13.687 13.687 0 0 1 7.645-12.275A1.976 1.976 0 0 0 22 16H2a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h20a1.976 1.976 0 0 0 1.944-1.725A13.687 13.687 0 0 1 16.3 30Z" />
            </svg>
        );
    },
);
