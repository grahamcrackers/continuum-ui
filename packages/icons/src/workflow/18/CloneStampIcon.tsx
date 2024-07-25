import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CloneStampIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M20.647 21.62a29.989 29.989 0 0 1-.771-5.178 9.971 9.971 0 0 1 .612-2.945 5.755 5.755 0 0 0 3.631-5.748 6.111 6.111 0 1 0-12.222 0 5.748 5.748 0 0 0 3.611 5.744 10.467 10.467 0 0 1 .622 2.949 31.39 31.39 0 0 1-.777 5.179c-2.923.148-10 1.767-12.48 2.351A1.146 1.146 0 0 0 2 25.1v3.729A1.153 1.153 0 0 0 3.146 30h29.711A1.154 1.154 0 0 0 34 28.836V25.1a1.146 1.146 0 0 0-.873-1.131c-2.476-.581-9.554-2.2-12.48-2.349Z" />
                <rect x="4" y="32" width="28" height="2" rx=".5" />
            </svg>
        );
    },
);
