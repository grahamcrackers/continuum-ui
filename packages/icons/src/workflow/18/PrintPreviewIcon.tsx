import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PrintPreviewIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M10 2v8H2l8-8z" />
                <path d="M11.7 23A11.3 11.3 0 0 1 23 11.7c.338 0 .67.021 1 .05V3a1 1 0 0 0-1-1H12v9a1 1 0 0 1-1 1H2v15a1 1 0 0 0 1 1h9.878a11.229 11.229 0 0 1-1.178-5Z" />
                <path d="M35.191 32.143 30.646 27.6a9.066 9.066 0 1 0-3.046 3.046l4.545 4.545a2.044 2.044 0 0 0 3.048 0 2.195 2.195 0 0 0-.002-3.048ZM17.412 22.98a5.568 5.568 0 1 1 5.568 5.567 5.568 5.568 0 0 1-5.568-5.567Z" />
            </svg>
        );
    },
);
