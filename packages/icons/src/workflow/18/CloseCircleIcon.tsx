import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CloseCircleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M29.314 6.686a16 16 0 1 0 0 22.627 16 16 0 0 0 0-22.627Zm-2.687 18.527-1.414 1.414a1.2 1.2 0 0 1-1.7 0L18 21.111l-5.516 5.516a1.2 1.2 0 0 1-1.7 0l-1.409-1.415a1.2 1.2 0 0 1 0-1.7L14.889 18l-5.514-5.516a1.2 1.2 0 0 1 0-1.7l1.414-1.414a1.2 1.2 0 0 1 1.7 0L18 14.888l5.516-5.515a1.2 1.2 0 0 1 1.7 0l1.414 1.414a1.2 1.2 0 0 1 0 1.7L21.111 18l5.516 5.516a1.2 1.2 0 0 1 0 1.7Z" />
            </svg>
        );
    },
);
