import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FormIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="4" rx="1" ry="1" width="40" x="4" y="8" />
                <rect height="4" rx="1" ry="1" width="40" x="4" y="18" />
                <path d="M40 32v6H8v-6Zm2.677-4H5.323A1.323 1.323 0 0 0 4 29.323v11.354A1.323 1.323 0 0 0 5.323 42h37.354A1.323 1.323 0 0 0 44 40.677V29.323A1.323 1.323 0 0 0 42.677 28Z" />
            </svg>
        );
    },
);
