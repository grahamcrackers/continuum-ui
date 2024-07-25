import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FileEmailIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M28 4v12h12L28 4z" />
                <path d="M24 32a2 2 0 0 1 2-2h14V20H26a2 2 0 0 1-2-2V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h14Z" />
                <path d="M39.343 43.834 48 37.538v9.351A1.111 1.111 0 0 1 46.889 48H29.111A1.111 1.111 0 0 1 28 46.889v-9.351l8.657 6.3a2.283 2.283 0 0 0 2.686-.004ZM38 41.052 48 34H28Z" />
            </svg>
        );
    },
);
