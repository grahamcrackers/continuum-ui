import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PlayIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M9.46 4H7a1 1 0 0 0-1 1v26a1 1 0 0 0 1 1h2.46a2 2 0 0 0 1.007-.272l22.064-12.866a1 1 0 0 0 0-1.724L10.467 4.272A2 2 0 0 0 9.46 4Z" />
            </svg>
        );
    },
);
