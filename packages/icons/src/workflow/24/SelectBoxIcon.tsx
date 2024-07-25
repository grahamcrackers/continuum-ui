import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SelectBoxIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M38 4H10a6 6 0 0 0-6 6v28a6 6 0 0 0 6 6h28a6 6 0 0 0 6-6V10a6 6 0 0 0-6-6Zm-.443 12.971-17.85 17.847a1 1 0 0 1-1.414 0l-7.85-7.848a1 1 0 0 1 0-1.414l3.113-3.113a1 1 0 0 1 1.414 0L19 26.475l14.029-14.032a1 1 0 0 1 1.414 0l3.113 3.113a1 1 0 0 1 .001 1.415Z" />
            </svg>
        );
    },
);
