import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AudioIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M40.327.908 17.57 6.805A2.066 2.066 0 0 0 16 8.742v23.712A8.535 8.535 0 0 0 13.235 32a12.319 12.319 0 0 0-4.744 1c-4.76 2-7.462 6.377-6.034 9.764.947 2.247 3.474 3.5 6.458 3.5a12.3 12.3 0 0 0 4.744-1C17.677 43.567 20 40.2 20 37.143V13.172l18-4.72v18A8.535 8.535 0 0 0 35.235 26a12.319 12.319 0 0 0-4.744 1c-4.76 2.005-7.462 6.377-6.034 9.764.947 2.247 3.474 3.5 6.458 3.5a12.3 12.3 0 0 0 4.744-1C39.677 37.567 42 34.2 42 31.143V2.156A1.349 1.349 0 0 0 40.327.908Z" />
            </svg>
        );
    },
);
