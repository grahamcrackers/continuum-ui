import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const KeyIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M35.522 8.775 29.06 2.312a1.5 1.5 0 0 0-2.122 0L13.177 16.073A8.9 8.9 0 0 0 9 15a9 9 0 1 0 9 9 8.9 8.9 0 0 0-1.049-4.133l6.726-6.726 3.74 3.74a.75.75 0 0 0 1.061 0l3.344-3.344-4.27-4.271 1.231-1.231 4.27 4.271 2.469-2.47a.75.75 0 0 0 0-1.061ZM7.5 28.5a3 3 0 1 1 3-3 3 3 0 0 1-3 3Z" />
            </svg>
        );
    },
);
