import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const EmailOutlineIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M46 6H2a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h44a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm-2 4v1.105l-19.941 14.5a.1.1 0 0 1-.118 0L4 11.105V10Zm0 5.8v16.29l-11.2-8.143Zm-28.8 8.147L4 32.09V15.8ZM4 38v-1.212L18.427 26.3l3.28 2.386a3.888 3.888 0 0 0 4.587 0l3.279-2.386L44 36.788V38Z" />
            </svg>
        );
    },
);
