import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ExportIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M25 26h-2a1 1 0 0 0-1 1v3H6V6h16v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Z" />
                <path d="M35.856 17.649 29.332 10.2a.787.787 0 0 0-.527-.2.8.8 0 0 0-.8.8V16H17a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h11v5.2a.8.8 0 0 0 .8.8.787.787 0 0 0 .527-.2l6.524-7.445a.5.5 0 0 0 0-.7Z" />
            </svg>
        );
    },
);
