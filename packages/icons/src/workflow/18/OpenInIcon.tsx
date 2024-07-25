import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const OpenInIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M33 2H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V6h24v24H19a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z" />
                <path d="M18.636 27.764a.784.784 0 0 0 .56.236.803.803 0 0 0 .804-.754v-10.75a.497.497 0 0 0-.496-.496H8.754a.803.803 0 0 0-.754.804.785.785 0 0 0 .235.56l3.786 3.786-9.042 9.042a1 1 0 0 0 0 1.415l1.414 1.414a1 1 0 0 0 1.414 0l9.043-9.042Z" />
            </svg>
        );
    },
);
