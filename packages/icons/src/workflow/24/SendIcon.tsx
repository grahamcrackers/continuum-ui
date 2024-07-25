import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SendIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M44.194 6.424 2 19a1.065 1.065 0 0 0-.191 1.978l9.669 4.834ZM16.078 28.042l16.149 8.143a1.064 1.064 0 0 0 1.444-.51L47.455 8.091ZM12.066 31v10.185a.95.95 0 0 0 1.565.725l7.147-6.021Z" />
            </svg>
        );
    },
);
