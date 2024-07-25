import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const MultipleCheckIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M29 2H19a1 1 0 0 0-1 1v5h4a2 2 0 0 1 2 2v4h5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z" />
                <rect height="12" rx="1" ry="1" width="12" x="2" y="18" />
                <path d="M16 18v3.492a12.351 12.351 0 0 1 6-5.733V11a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v5h4a2 2 0 0 1 2 2ZM27.1 18.2a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9Zm-2.338 14.312-4.128-4.128a.5.5 0 0 1 0-.707l1.036-1.036a.5.5 0 0 1 .707 0l2.731 2.731 6.106-6.106a.5.5 0 0 1 .707 0l1.043 1.043a.5.5 0 0 1 0 .707l-7.5 7.5a.5.5 0 0 1-.702-.004Z" />
            </svg>
        );
    },
);
