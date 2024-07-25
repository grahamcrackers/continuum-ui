import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CloudIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M38.143 36a7.857 7.857 0 1 0-.887-15.664A9.953 9.953 0 1 0 17.8 16.382 8.385 8.385 0 0 0 7.521 26.64a4.768 4.768 0 0 0-.807-.069 4.715 4.715 0 0 0 0 9.429Z" />
            </svg>
        );
    },
);
