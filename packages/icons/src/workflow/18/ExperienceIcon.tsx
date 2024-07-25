import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ExperienceIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M33 4H3a1 1 0 0 0-1 1v26a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1ZM12 28H6V18h6Zm18 0H14v-4h16Zm0-6H14v-4h16Zm0-6H6V8h24Z" />
            </svg>
        );
    },
);
