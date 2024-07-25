import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FolderAddToIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18.1 4.8a2 2 0 0 0-1.6-.8H6a2 2 0 0 0-2 2v4h18ZM13.607 36.557l12.664-13.125a5.448 5.448 0 0 1 9.359 3.793v.066a19.681 19.681 0 0 1 8.37 3.75V16a2 2 0 0 0-2-2H4v26a2 2 0 0 0 2 2h12.86Z" />
                <path d="M31.03 31.465v-4.24a.848.848 0 0 0-1.448-.6L20 36.556l9.582 9.932a.848.848 0 0 0 1.448-.6v-4.3c9.178-1.545 14.058 3.693 15.888 6.175A.6.6 0 0 0 48 47.412c0-2.561-2.923-15.947-16.97-15.947Z" />
            </svg>
        );
    },
);
