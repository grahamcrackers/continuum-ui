import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SliceIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m34.242 8.868-9.188-7.232a1 1 0 0 0-1.4.159l-4.505 6.294a.989.989 0 0 0 .138 1.293v.029l-.679.858a7.482 7.482 0 0 1-1.027 1.063l-2.808 2.384a7.519 7.519 0 0 0-1.309 1.445L.063 34.486l22.971-10.227 3.507-6.021a7.47 7.47 0 0 1 .6-.878l.9-1.133s.138.106.19.148a1.021 1.021 0 0 0 1.424-.161c.5-.627 4.754-5.935 4.754-5.935a1 1 0 0 0-.167-1.411Zm-8.671 7.251a9.6 9.6 0 0 0-.758 1.112l-3.182 5.463L5.78 29.751 15.108 16.3a5.517 5.517 0 0 1 .96-1.058l2.807-2.384a9.469 9.469 0 0 0 1.3-1.347l.679-.858 5.613 4.334Z" />
            </svg>
        );
    },
);
