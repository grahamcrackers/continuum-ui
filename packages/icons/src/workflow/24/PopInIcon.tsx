import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PopInIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M13.731 22.955 31.287 5.4a2 2 0 0 1 2.828 0l8.485 8.484a2 2 0 0 1 0 2.828L25.045 34.269l6.024 6.024A1 1 0 0 1 30.362 42H6V17.638a1 1 0 0 1 1.707-.707Z" />
            </svg>
        );
    },
);
