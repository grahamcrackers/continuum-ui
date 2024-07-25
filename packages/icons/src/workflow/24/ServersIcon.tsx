import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ServersIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M42 32H18a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2Zm-18 4h-6v-2h6ZM8 5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v38a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h6v-4H8V26h6v-4H8V12h6V8H8Zm34-1H18a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM24 8h-6V6h6Zm18 10H18a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2Zm-18 4h-6v-2h6Z" />
            </svg>
        );
    },
);
