import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CloudOutlineIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M27.2 10h.111a7.686 7.686 0 0 1 7.04 10.817 9.749 9.749 0 0 1 1.821-.179 6.7 6.7 0 0 1 3.112.7 5.571 5.571 0 0 1-.4 10.069 10.9 10.9 0 0 1-4.281.59h-.128L10.35 31.98a5.716 5.716 0 0 1-3.05-.573c-2.23-1.391-1.386-4.825 1.053-5.36a4.333 4.333 0 0 1 .928-.1 8.085 8.085 0 0 1 1.877.264 6.549 6.549 0 0 1 1.175-7.262 6.52 6.52 0 0 1 4.628-1.885 6.222 6.222 0 0 1 2.608.559 7.917 7.917 0 0 1 4.865-7.107A7.49 7.49 0 0 1 27.2 10Zm0-4a11.438 11.438 0 0 0-4.25.8 11.955 11.955 0 0 0-6.393 6.272A10.248 10.248 0 0 0 6.589 22.4 7.034 7.034 0 0 0 2.1 27.856 6.693 6.693 0 0 0 5.178 34.8a9.416 9.416 0 0 0 5.173 1.182l12.063.008 12.062.01h.131a14.455 14.455 0 0 0 5.843-.908 9.571 9.571 0 0 0 .681-17.3 9.862 9.862 0 0 0-2.192-.826 11.88 11.88 0 0 0-3.21-7.406A11.886 11.886 0 0 0 27.367 6Z" />
            </svg>
        );
    },
);
