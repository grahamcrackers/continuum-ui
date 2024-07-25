import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ArrowUpRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M34.269 25.045 16.713 42.6a2 2 0 0 1-2.828 0L5.4 34.116a2 2 0 0 1 0-2.828l17.555-17.557-6.024-6.024A1 1 0 0 1 17.638 6H42v24.362a1 1 0 0 1-1.707.707Z" />
            </svg>
        );
    },
);
