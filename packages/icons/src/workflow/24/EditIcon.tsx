import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const EditIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M17.054 37.145c-3.1 1.116-6.975 2.517-9.652 3.475l3.456-9.653Zm16.64-32.727L8.82 29.292a2.233 2.233 0 0 0-.521.814L4.115 41.659a1.655 1.655 0 0 0 2.171 2.186L17.9 39.713a2.231 2.231 0 0 0 .827-.526L43.59 14.274a1.887 1.887 0 0 0 .173-2.653l-7.42-7.382a1.889 1.889 0 0 0-2.649.179Z" />
            </svg>
        );
    },
);
