import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const RailTopIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M2 40h44a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2ZM22 9a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H23a1 1 0 0 1-1-1ZM4 14h40v22H4Z" />
            </svg>
        );
    },
);
