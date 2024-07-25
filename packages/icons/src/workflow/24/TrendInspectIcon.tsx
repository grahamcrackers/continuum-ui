import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TrendInspectIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M30.76 28.442a7.828 7.828 0 0 0 1.083-6.369l-.644.7-4.415-6.345c-.089-.033-.183-.055-.272-.085l-8.7 12.827a8.1 8.1 0 0 0 2.859 2.2l5.982-8.823ZM42.33 16.024l5.488-6.115-2.644-2.441-4.681 5.241a20.017 20.017 0 0 1 1.837 3.315ZM11.273 38.818l-1.546 1.727-4.909-9.636-4.727 3.546 1.874 3.178 1.581-1.36 6 11L14.091 41a19.652 19.652 0 0 1-2.818-2.182Z" />
                <path d="M8 24a16 16 0 0 0 24.991 13.233l9.888 9.888a3 3 0 0 0 4.242-4.242l-9.888-9.888A16 16 0 1 0 8 24Zm3.9 0A12.1 12.1 0 1 1 24 36.1 12.114 12.114 0 0 1 11.9 24Z" />
                <path d="M8 24a16 16 0 0 0 24.991 13.233l9.888 9.888a3 3 0 0 0 4.242-4.242l-9.888-9.888A16 16 0 1 0 8 24Zm3.9 0A12.1 12.1 0 1 1 24 36.1 12.114 12.114 0 0 1 11.9 24Z" />
            </svg>
        );
    },
);
