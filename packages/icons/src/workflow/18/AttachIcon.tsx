import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AttachIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M16.207 31.557a6.64 6.64 0 0 1-4.728 1.97h-.106a6.976 6.976 0 0 1-4.827-2.075 6.764 6.764 0 0 1-.1-9.661l17.779-17.8a4.874 4.874 0 0 1 3.133-1.479 3.72 3.72 0 0 1 3.042 1.12A3.537 3.537 0 0 1 31.517 6.7a5.74 5.74 0 0 1-1.584 3L18.072 21.541c-.764.765-1.483 1.315-2.3.5s-.176-1.569.526-2.271c.267-.267 8.248-8.238 9.673-9.659a.732.732 0 0 0 .014-1.021l-.675-.718a.735.735 0 0 0-1.056-.015L14.3 18.344a3.632 3.632 0 0 0-.072 5.469c2.661 2.66 5.683-.591 5.683-.591L31.7 11.466c2.508-2.5 3.47-6.6.472-9.6A6.227 6.227 0 0 0 27.589 0a7.275 7.275 0 0 0-5.132 2.227L4.76 19.9A9.433 9.433 0 0 0 18.1 33.24l15.405-15.4a.735.735 0 0 0 0-1.038l-.75-.751a.735.735 0 0 0-1.039 0Z" />
            </svg>
        );
    },
);
