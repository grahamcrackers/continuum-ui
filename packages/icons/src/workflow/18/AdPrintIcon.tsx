import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AdPrintIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M33 6H5a1 1 0 0 0-1 1v20a1 1 0 0 1-2 0V10.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V27a3 3 0 0 0 3 3h28a3 3 0 0 0 3-3V7a1 1 0 0 0-1-1Zm-2 22H6V8h26v19a1 1 0 0 1-1 1Z" />
                <path d="M22 10h8v16h-8z" />
            </svg>
        );
    },
);
