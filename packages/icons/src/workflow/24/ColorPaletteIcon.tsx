import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ColorPaletteIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M30.938 7.112c-5.4-.86-11.13 0-11.924 2.585a2.834 2.834 0 0 0 1.6 3.6c1.423.8 3.215 3.3 1.407 5.612a3.5 3.5 0 0 1-3.862 1.391c-4.632-1.169-9.755-3.561-13.948.427-3.822 3.63-2.263 9.028 1.439 11.966a28.929 28.929 0 0 0 17.938 6.518C35.436 39.211 46 32.226 46 23c0-9.341-8.86-14.9-15.062-15.888ZM12.5 33.448a4.7 4.7 0 1 1 4.694-4.7 4.7 4.7 0 0 1-4.694 4.7ZM38.233 13.7a2.834 2.834 0 1 1-2.833 2.833 2.833 2.833 0 0 1 2.833-2.833ZM23.107 36.05a4.4 4.4 0 1 1 4.4-4.4 4.4 4.4 0 0 1-4.4 4.4Zm9.629-1.85a3.714 3.714 0 1 1 3.713-3.714 3.714 3.714 0 0 1-3.713 3.714Zm6.692-6.1a3.306 3.306 0 1 1 3.305-3.3 3.306 3.306 0 0 1-3.305 3.306Z" />
            </svg>
        );
    },
);
