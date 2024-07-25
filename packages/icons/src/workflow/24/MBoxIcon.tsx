import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const MBoxIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M46 6H2a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h44a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm-2 32H4V14h40Z" />
                <path d="M16 18h4v2h-4zM12 18h2v2h-2zM22 18h4v2h-4zM28 18h4v2h-4zM34 18h2v2h-2zM16 32h4v2h-4zM12 32h2v2h-2zM22 32h4v2h-4zM28 32h4v2h-4zM34 32h2v2h-2zM38.001 18h2v4h-2zM38.001 24h2v4h-2zM38.001 30h2v4h-2zM8.001 18h2v4h-2zM8.001 24h2v4h-2zM8.001 30h2v4h-2z" />
            </svg>
        );
    },
);
