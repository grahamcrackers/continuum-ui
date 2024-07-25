import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ExposureIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M6.17 7.266a15.805 15.805 0 0 0-3.4 15.558h8.565ZM24.515 3.411A15.843 15.843 0 0 0 8.786 4.94l2.643 7.966ZM33.942 19.154c.03-.382.058-.764.058-1.154a15.951 15.951 0 0 0-6.458-12.812L21.043 9.9ZM26.85 18.026l-5.006 15.482a16 16 0 0 0 11.448-10.862ZM18.31 33.984l2.568-7.944H4.183A15.98 15.98 0 0 0 18 34c.105 0 .207-.008.31-.016Z" />
            </svg>
        );
    },
);
