import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DrawIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m43.763 11.621-7.42-7.382a1.889 1.889 0 0 0-2.649.179L29.4 8.712l9.88 9.88 4.31-4.319a1.886 1.886 0 0 0 .173-2.652ZM26.712 11.4 8.82 29.292a2.233 2.233 0 0 0-.521.814L4.115 41.659a1.655 1.655 0 0 0 2.171 2.186L17.9 39.713a2.231 2.231 0 0 0 .827-.526l17.87-17.9Zm-9.658 25.745c-3.1 1.116-6.975 2.517-9.652 3.475l3.456-9.653Z" />
            </svg>
        );
    },
);
