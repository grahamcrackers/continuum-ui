import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const OrganisationsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M33 2H15a1 1 0 0 0-1 1v11h10v20h9a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm-11 8h-6V6h6Zm10 16h-6v-4h6Zm0-8h-6v-4h6Zm0-8h-6V6h6Z" />
                <path d="M2 17v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V17a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1Zm12 1h6v4h-6ZM4 18h6v4H4Zm0 8h6v4H4Z" />
            </svg>
        );
    },
);
