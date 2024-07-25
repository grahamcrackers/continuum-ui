import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ChatIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M4.5 20h21a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5h-9.811a2 2 0 0 0-1.422.593L9.6 39.6V35a1 1 0 0 0-1-1H4.5a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5ZM0 20v14a4 4 0 0 0 4 4h2v8.793a.5.5 0 0 0 .5.5.486.486 0 0 0 .35-.148L16 38h10a4 4 0 0 0 4-4V20a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4Z" />
                <path d="M28 12H18V8a4 4 0 0 1 4-4h22a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4h-2v6.793a.5.5 0 0 1-.853.354L34 26v-8a6 6 0 0 0-6-6Z" />
            </svg>
        );
    },
);
