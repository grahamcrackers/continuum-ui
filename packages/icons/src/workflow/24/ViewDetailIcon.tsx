import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ViewDetailIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m45.7 42.3-7.161-7.161a10.1 10.1 0 1 0-3.395 3.395L42.3 45.7c.469.469 2.5.89 3.394 0a2.444 2.444 0 0 0 .006-3.4ZM23.8 30a6.2 6.2 0 1 1 6.2 6.2 6.2 6.2 0 0 1-6.2-6.2Z" />
                <path d="M17.365 36H8V8h28v9.365a14.024 14.024 0 0 1 4 2.846V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h14.211a14.024 14.024 0 0 1-2.846-4Z" />
            </svg>
        );
    },
);
