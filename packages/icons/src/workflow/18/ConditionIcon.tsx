import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ConditionIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m27.828 25 4.88-4.879a1 1 0 0 0 0-1.414l-1.415-1.414a1 1 0 0 0-1.414 0L25 22.172l-4.879-4.88a1 1 0 0 0-1.414 0l-1.414 1.415a1 1 0 0 0 0 1.414L22.172 25l-4.88 4.879a1 1 0 0 0 0 1.414l1.415 1.414a1 1 0 0 0 1.414 0L25 27.828l4.879 4.879a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414ZM21.448 3.428 19.8 2.295a1 1 0 0 0-1.39.257L9.684 15.24l-4.657-4.657a1 1 0 0 0-1.414 0L2.2 11.997a1 1 0 0 0 0 1.414l7.207 7.207a1 1 0 0 0 1.53-.14l10.768-15.66a1 1 0 0 0-.257-1.39Z" />
            </svg>
        );
    },
);
