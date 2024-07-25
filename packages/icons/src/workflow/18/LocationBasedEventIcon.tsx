import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const LocationBasedEventIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20.5 14.054a.494.494 0 0 0-.5.5v19.782a.494.494 0 0 0 .846.353L26.51 29h8c.446 0 .479-.726.225-.98L20.846 14.2a.489.489 0 0 0-.346-.146Z" />
                <path d="M2 2v10.476A10.735 10.735 0 0 1 6 10.3V6h22v11.158l4 4V2Z" />
                <path d="M9 12.367a8.25 8.25 0 0 0-8.25 8.25C.75 25.173 9 35.57 9 35.57s8.25-10.4 8.25-14.953A8.25 8.25 0 0 0 9 12.367Zm0 11.75a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5Z" />
            </svg>
        );
    },
);
