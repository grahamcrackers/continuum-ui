import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const StopwatchIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M26 6.237V4h1a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1v2.026a18.894 18.894 0 0 0-9.875 3.394l-1.186-1.185.8-.8a1 1 0 0 0 0-1.414L10.328 4.6a1 1 0 0 0-1.414 0L4.671 8.845a1 1 0 0 0 0 1.415l1.415 1.414a1 1 0 0 0 1.414 0l.611-.611.987.988A19 19 0 1 0 26 6.237ZM23 40.1a15.1 15.1 0 1 1 9.281-27.011L22.675 22.7c-.021.021-.037.04-.057.062a1.858 1.858 0 1 0 2.619 2.634l.068-.066 9.606-9.606A15.1 15.1 0 0 1 23 40.1Z" />
            </svg>
        );
    },
);
