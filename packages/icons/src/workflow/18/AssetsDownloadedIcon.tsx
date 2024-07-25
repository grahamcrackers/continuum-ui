import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AssetsDownloadedIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M12 24H4V4h28v11.624a12.045 12.045 0 0 1 2 1.458V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h11a11.975 11.975 0 0 1 .181-2Z" />
                <path d="M26 16.05A9.95 9.95 0 1 0 35.95 26 9.95 9.95 0 0 0 26 16.05Zm-.17 16.181-5.39-5.364a.5.5 0 0 1 .339-.867H24v-5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V26h3.221a.5.5 0 0 1 .339.867l-5.39 5.364a.25.25 0 0 1-.34 0Z" />
            </svg>
        );
    },
);
