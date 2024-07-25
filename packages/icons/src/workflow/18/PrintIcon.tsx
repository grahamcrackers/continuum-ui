import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PrintIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M35 10h-5V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v7H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3v7a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1v-7h3a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1ZM8 4h20v6H8Zm22 28H6V20h24Z" />
                <path d="M10 26h16v2H10zM10 22h16v2H10z" />
            </svg>
        );
    },
);
