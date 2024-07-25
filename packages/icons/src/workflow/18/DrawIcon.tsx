import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DrawIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20.454 8 5.084 23.372a.992.992 0 0 0-.251.421L2.055 33.1c-.114.376.459.85.783.85a.311.311 0 0 0 .062-.006c.276-.064 7.867-2.344 9.311-2.778a.984.984 0 0 0 .415-.25L28 15.544ZM11.4 29.316c-2.161.649-4.862 1.465-6.729 2.022l2.009-6.73ZM33.567 8.2 27.8 2.432a1.215 1.215 0 0 0-.866-.353H26.9a1.372 1.372 0 0 0-.927.407l-4.1 4.1 7.543 7.543 4.1-4.1a1.372 1.372 0 0 0 .4-.883 1.224 1.224 0 0 0-.349-.946Z" />
            </svg>
        );
    },
);
