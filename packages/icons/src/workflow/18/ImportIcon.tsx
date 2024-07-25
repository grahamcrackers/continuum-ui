import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ImportIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M33 2H11a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V6h16v24H14v-3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z" />
                <path d="M16 25.198a.8.8 0 0 0 .805.802.786.786 0 0 0 .527-.204l7.524-7.445a.5.5 0 0 0 0-.702l-7.524-7.445a.785.785 0 0 0-.527-.204.8.8 0 0 0-.805.802V16H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13Z" />
            </svg>
        );
    },
);
