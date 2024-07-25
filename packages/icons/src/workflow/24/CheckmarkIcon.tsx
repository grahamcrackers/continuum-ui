import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CheckmarkIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M41.3 9.834 38.33 7.52a1 1 0 0 0-1.4.175l-17.697 22.73-8.613-8.614a1 1 0 0 0-1.414 0l-2.695 2.7a1 1 0 0 0 0 1.414l12.432 12.442a1 1 0 0 0 1.5-.093l21.034-27.037a1 1 0 0 0-.177-1.403Z" />
            </svg>
        );
    },
);
