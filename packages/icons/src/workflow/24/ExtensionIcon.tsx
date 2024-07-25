import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ExtensionIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M42 12h-2V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v9h-8V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v9h-2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v6a6 6 0 0 0 6 6h2v4a7.083 7.083 0 0 1-14 0V15.382a7.26 7.26 0 0 0-6.133-7.33 6.929 6.929 0 0 0-7.322 4.363 1.022 1.022 0 0 0 .527 1.326l1.719.738a1.044 1.044 0 0 0 1.4-.527A3 3 0 0 1 12 15v21a11.05 11.05 0 0 0 22 0v-4h2a6 6 0 0 0 6-6v-6a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Z" />
            </svg>
        );
    },
);
