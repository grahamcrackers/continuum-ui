import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const MergeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M45.856 22.649 37.332 14.2a.787.787 0 0 0-.527-.2.8.8 0 0 0-.8.8V20H26V10a2 2 0 0 0-2-2H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h15v18H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h19a2 2 0 0 0 2-2V26h10v5.2a.8.8 0 0 0 .8.8.787.787 0 0 0 .527-.2l8.524-8.445a.5.5 0 0 0 0-.7Z" />
            </svg>
        );
    },
);
