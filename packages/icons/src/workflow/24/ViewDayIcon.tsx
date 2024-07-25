import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ViewDayIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M22.332 34c-.216 0-.288-.076-.288-.264v-10.95a13.766 13.766 0 0 1-3.709 1.325c-.216.037-.288 0-.288-.227v-3.2c0-.188.036-.263.216-.3a16.954 16.954 0 0 0 4.937-2.233.913.913 0 0 1 .54-.151h2.06c.143 0 .18.076.18.264v15.472c0 .188-.073.264-.216.264Z" />
                <path d="M45 8h-7V5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3H14V5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3H3a1 1 0 0 0-1 1v32a1 1 0 0 0 1 1h42a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Zm-3 30H6V12h4v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1h20v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1h4Z" />
            </svg>
        );
    },
);
