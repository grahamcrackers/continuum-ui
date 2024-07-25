import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BookmarkSingleOutlineIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="42"
                viewBox="0 0 42 42"
                width="42"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M28 7v25.85l-4.459-4.459-2.47-2.47-2.471 2.465-4.6 4.575L14.011 7Zm2.45-3.5H11.562a1.05 1.05 0 0 0-1.05 1.05L10.5 40.482c0 .3.11.465.276.465a.537.537 0 0 0 .339-.17l9.951-9.911 9.845 9.846a.512.512 0 0 0 .334.186c.154 0 .255-.16.255-.451V4.55a1.05 1.05 0 0 0-1.05-1.05Z" />
            </svg>
        );
    },
);
