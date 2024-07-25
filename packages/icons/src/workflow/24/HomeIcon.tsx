import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const HomeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M46.669 24.544 25.456 3.331a2 2 0 0 0-2.829 0L1.414 24.544a2 2 0 0 0 0 2.829l2.042 2.041A2 2 0 0 0 4.87 30H6v12a2 2 0 0 0 2 2h9a1 1 0 0 0 1-1V27a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1l.037 16a1 1 0 0 0 1 1H40a2 2 0 0 0 2-2V30h1.213a2 2 0 0 0 1.414-.586l2.042-2.041a2 2 0 0 0 0-2.829Z" />
            </svg>
        );
    },
);
