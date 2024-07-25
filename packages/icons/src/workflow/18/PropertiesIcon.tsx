import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PropertiesIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M33.5 6H15.9a5 5 0 0 0-9.8 0H2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3.6a5 5 0 0 0 9.8 0h17.6a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5ZM11 10a3 3 0 1 1 3-3 3 3 0 0 1-3 3ZM33.5 26H19.9a5 5 0 0 0-9.8 0H2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h7.6a5 5 0 0 0 9.8 0h13.6a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5ZM15 30a3 3 0 1 1 3-3 3 3 0 0 1-3 3ZM2 16.5v1a.5.5 0 0 0 .5.5h17.6a5 5 0 0 0 9.8 0h3.6a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-3.6a5 5 0 0 0-9.8 0H2.5a.5.5 0 0 0-.5.5Zm20 .5a3 3 0 1 1 3 3 3 3 0 0 1-3-3Z" />
            </svg>
        );
    },
);
