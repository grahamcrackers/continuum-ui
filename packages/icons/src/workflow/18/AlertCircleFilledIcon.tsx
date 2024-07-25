import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AlertCircleFilledIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm-2.6 4.775a.711.711 0 0 1 .337-.675 6.246 6.246 0 0 1 2.225-.458 6.861 6.861 0 0 1 2.232.344.777.777 0 0 1 .4.687v2.45c0 2.885-.577 10.891-.683 11.947a.527.527 0 0 1-.587.52H16.6a.568.568 0 0 1-.578-.473c-.1-1.364-.622-9.1-.622-11.891ZM18 28.85a2.574 2.574 0 0 1-2.8-2.631 2.66 2.66 0 0 1 2.8-2.7 2.632 2.632 0 0 1 2.8 2.7A2.574 2.574 0 0 1 18 28.85Z" />
            </svg>
        );
    },
);
