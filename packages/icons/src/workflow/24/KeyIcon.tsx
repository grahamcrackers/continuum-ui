import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const KeyIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m47.363 11.7-8.617-8.617a2 2 0 0 0-2.829 0L17.606 21.394a12.021 12.021 0 1 0 5.03 5.061l8.933-8.934 4.987 4.987a1 1 0 0 0 1.414 0l4.46-4.459-5.694-5.694 1.641-1.641 5.693 5.694 3.293-3.293a1 1 0 0 0 0-1.415ZM10 38a4 4 0 1 1 4-4 4 4 0 0 1-4 4Z" />
            </svg>
        );
    },
);
