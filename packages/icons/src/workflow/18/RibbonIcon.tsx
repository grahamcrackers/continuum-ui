import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const RibbonIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M11.776 22.661 7.564 30.24a.5.5 0 0 0 .617.693L12.2 29.5a.5.5 0 0 1 .639.3l1.432 4.016a.5.5 0 0 0 .926.038l1.681-3.708-3.042-6.441a11.429 11.429 0 0 1-2.06-1.044Zm16.66 7.579-3.869-7.807a11.248 11.248 0 0 1-8.218 1.935l4.459 9.49a.5.5 0 0 0 .925-.038l1.432-4.02a.5.5 0 0 1 .64-.3l4.014 1.432a.5.5 0 0 0 .617-.692ZM18 4a9 9 0 1 0 9 9 9 9 0 0 0-9-9Zm0 14.5a5.5 5.5 0 1 1 5.5-5.5 5.5 5.5 0 0 1-5.5 5.5Z" />
            </svg>
        );
    },
);
