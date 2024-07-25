import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FlashlightIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m36.552 25.448 8.1-8.1a2 2 0 0 0 0-2.828L33.477 3.352a2 2 0 0 0-2.829 0l-8.1 8.1a1 1 0 0 0-.286.594l-.675 5.883L2.663 36.852a2.264 2.264 0 0 0 0 3.2l5.283 5.283a2.264 2.264 0 0 0 3.2 0L30.074 26.41l5.884-.675a1 1 0 0 0 .594-.287Zm-14.146.145a3.4 3.4 0 1 1 4.808 0 3.4 3.4 0 0 1-4.809 0Z" />
            </svg>
        );
    },
);
