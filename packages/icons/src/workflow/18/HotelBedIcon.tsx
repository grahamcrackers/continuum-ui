import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const HotelBedIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M35.2 22H.8L6 14h24ZM0 24v5a1 1 0 0 0 1 1h3v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V30h24v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V30h3a1 1 0 0 0 1-1v-5Zm8-13a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1h4v-1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1h2V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v5h2Z" />
            </svg>
        );
    },
);
