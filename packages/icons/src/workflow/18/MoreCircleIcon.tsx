import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const MoreCircleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2ZM9.02 21.391A3.391 3.391 0 1 1 12.411 18a3.391 3.391 0 0 1-3.391 3.391Zm8.981 0A3.391 3.391 0 1 1 21.391 18 3.392 3.392 0 0 1 18 21.391Zm8.822 0A3.391 3.391 0 1 1 30.214 18a3.391 3.391 0 0 1-3.391 3.391Z" />
            </svg>
        );
    },
);
