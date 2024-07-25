import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const EditExcludeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20.1 36A15.9 15.9 0 0 1 36 20.1a16.088 16.088 0 0 1 1.684.091l5.906-5.918a1.886 1.886 0 0 0 .173-2.653l-7.42-7.382a1.888 1.888 0 0 0-2.649.18L8.82 29.292a2.236 2.236 0 0 0-.521.814L4.115 41.659a1.655 1.655 0 0 0 2.171 2.186L17.9 39.713a2.229 2.229 0 0 0 .826-.526l1.474-1.474A15.982 15.982 0 0 1 20.1 36ZM7.4 40.62l3.456-9.653 6.2 6.178c-3.101 1.116-6.976 2.517-9.656 3.475Z" />
                <path d="M36 24.1A11.9 11.9 0 1 0 47.9 36 11.9 11.9 0 0 0 36 24.1ZM44.925 36a8.859 8.859 0 0 1-1.663 5.158l-12.42-12.42A8.9 8.9 0 0 1 44.925 36Zm-17.85 0a8.859 8.859 0 0 1 1.663-5.158l12.42 12.42A8.9 8.9 0 0 1 27.075 36Z" />
            </svg>
        );
    },
);
