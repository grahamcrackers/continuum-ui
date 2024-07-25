import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const LaunchIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M34.978.377A34.727 34.727 0 0 0 9.586 21.99a.522.522 0 0 0 .125.545l3.752 3.751a.522.522 0 0 0 .541.127A34.428 34.428 0 0 0 35.619 1.018a.544.544 0 0 0-.641-.641ZM7.8 19.148H.9a.524.524 0 0 1-.46-.783C2.021 15.609 7.92 6.52 16.848 6.52 14.776 8.591 7.962 17.569 7.8 19.148ZM16.848 28.2v6.908a.524.524 0 0 0 .779.461c2.752-1.554 11.849-7.376 11.849-16.419-2.076 2.07-11.05 8.884-12.628 9.05Z" />
            </svg>
        );
    },
);
