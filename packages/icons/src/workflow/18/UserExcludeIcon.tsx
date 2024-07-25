import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const UserExcludeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M14.7 27a12.266 12.266 0 0 1 4.311-9.342v-1.409a1.441 1.441 0 0 1 .367-.93 11 11 0 0 0 2.5-6.866c0-5.2-2.756-8.1-6.919-8.1s-7 3.018-7 8.1a11.121 11.121 0 0 0 2.622 6.866 1.443 1.443 0 0 1 .367.93v2.074A1.431 1.431 0 0 1 9.7 19.767C1.338 20.5.031 26.217.031 28.474c0 .251.048 1.484.048 1.484h14.994A12.288 12.288 0 0 1 14.7 27ZM27 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9ZM20.2 27a6.749 6.749 0 0 1 1.289-3.957l9.468 9.468A6.78 6.78 0 0 1 20.2 27Zm12.311 3.957-9.468-9.468a6.78 6.78 0 0 1 9.468 9.468Z" />
            </svg>
        );
    },
);
