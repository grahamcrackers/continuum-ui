import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const RenameIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M31 0h2v36h-2zM25.588 31.7 15.633 4.21c-.041-.169-.082-.21-.251-.21h-4.153a.2.2 0 0 0-.21.21 4.564 4.564 0 0 1-.3 1.739L1.485 31.662c-.041.21.045.338.255.338h2.88a.3.3 0 0 0 .338-.255L8.09 23H18.7l3.161 8.79a.376.376 0 0 0 .339.21h3.218c.214 0 .256-.128.17-.3ZM13.347 6.88h.041c.759 2.707 3.355 9.972 4.44 13.12h-8.87c1.59-4.584 3.704-10.546 4.389-13.12Z" />
            </svg>
        );
    },
);
