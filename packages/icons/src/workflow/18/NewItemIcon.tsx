import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const NewItemIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M6 6h22v22H6Zm-.8-2A1.19 1.19 0 0 0 4 5.2V29a1 1 0 0 0 1 1h23.8a1.19 1.19 0 0 0 1.2-1.2V5.2A1.189 1.189 0 0 0 28.8 4Z" />
                <path d="M16.5 10a.5.5 0 0 0-.5.5V16h-5.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H16v5.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V18h5.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H18v-5.5a.5.5 0 0 0-.5-.5Z" />
            </svg>
        );
    },
);
