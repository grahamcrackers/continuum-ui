import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PublishPendingIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M33.191 1.113 1.8 10.478a.5.5 0 0 0-.08.926l7.92 3.954ZM15.645 22.372 10.08 19.25v7.639a.713.713 0 0 0 1.174.544l3.795-3.2a12.239 12.239 0 0 1 .596-1.861ZM27 14.8a12.288 12.288 0 0 1 2.786.329l5.851-12.765-22.548 14.667 4.435 2.229A12.273 12.273 0 0 1 27 14.8ZM26 26.617l-3.132 3.132 1.415 1.414L28 27.446v-7.123h-2v6.294zM33.717 28.3a6.96 6.96 0 0 1-1.041 2.536l1.437 1.437a8.929 8.929 0 0 0 1.632-3.973ZM35.752 25.7a8.835 8.835 0 0 0-1.6-3.916L32.713 23.2a6.863 6.863 0 0 1 1.014 2.5Z" />
                <path d="M30.849 32.687A6.772 6.772 0 0 1 27 33.9a6.876 6.876 0 0 1-1.2-13.651v-2.007A8.867 8.867 0 0 0 27 35.9a8.733 8.733 0 0 0 5.271-1.791ZM28.2 18.238v2.018a6.887 6.887 0 0 1 2.69 1.093l1.434-1.411a8.834 8.834 0 0 0-4.124-1.7Z" />
            </svg>
        );
    },
);
