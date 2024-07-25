import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CropIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24 22h4V9a1 1 0 0 0-1-1H14v4h10Z" />
                <path d="M12 24V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v5H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5v15a1 1 0 0 0 1 1h15v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-5h5a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" />
            </svg>
        );
    },
);
