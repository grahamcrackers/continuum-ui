import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TextSizeAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M13.5 18a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V20H8v10h1.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H6V20H2v1.473a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V18.5a.5.5 0 0 1 .5-.5ZM20 18.522a10.973 10.973 0 0 1 4-2.095V8h8v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V8h8ZM27 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9Zm4.9 10.4h-3.4v3.4a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-3.4h-3.4a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h3.4v-3.4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v3.4h3.4a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5Z" />
            </svg>
        );
    },
);
