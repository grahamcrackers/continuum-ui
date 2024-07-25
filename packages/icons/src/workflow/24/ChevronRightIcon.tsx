import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ChevronRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M31.7 25.414 21.05 36.059a2 2 0 0 1-2.828 0l-.282-.282a2.006 2.006 0 0 1 0-2.828L26.888 24l-8.948-8.949a2.006 2.006 0 0 1 0-2.828l.282-.282a2 2 0 0 1 2.828 0L31.7 22.585a2 2 0 0 1 0 2.829Z" />
            </svg>
        );
    },
);
