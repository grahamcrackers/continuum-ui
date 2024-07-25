import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FilterHeartIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M36 24.1A11.9 11.9 0 1 0 47.9 36 11.9 11.9 0 0 0 36 24.1Zm0 20.334s-8.713-6.724-8.713-10.3a4.752 4.752 0 0 1 4.752-4.753A4.987 4.987 0 0 1 36 31.76a4.986 4.986 0 0 1 3.961-2.376 4.752 4.752 0 0 1 4.752 4.753C44.713 37.71 36 44.434 36 44.434Z" />
                <path d="M20.3 36c0-4.157 1.449-7.322 4.265-10.735S39.621 6.388 39.621 6.388A1.464 1.464 0 0 0 38.486 4H1.529A1.464 1.464 0 0 0 .393 6.388l15.686 19.671v18.417a1.464 1.464 0 0 0 2.46 1.073l3.256-2.886A14.465 14.465 0 0 1 20.3 36Z" />
            </svg>
        );
    },
);
