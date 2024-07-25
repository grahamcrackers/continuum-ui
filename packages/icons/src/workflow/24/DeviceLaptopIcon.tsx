import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DeviceLaptopIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M47.474 40.421 42 28V7.2A1.2 1.2 0 0 0 40.8 6H7.2A1.2 1.2 0 0 0 6 7.2V28L.526 40.421A1.2 1.2 0 0 0 1.665 42h44.67a1.2 1.2 0 0 0 1.139-1.579ZM9 9.25h30V28H9Zm7.8 30.35 1.2-4.8h12l1.2 4.8Z" />
            </svg>
        );
    },
);
