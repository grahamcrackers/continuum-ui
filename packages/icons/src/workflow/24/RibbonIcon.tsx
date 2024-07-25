import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const RibbonIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m13.85 31.027-4.921 9.932a1.151 1.151 0 0 0 1.418 1.6l4.264-1.521a1.153 1.153 0 0 1 1.472.7L17.6 46a1.151 1.151 0 0 0 2.133.088l3.118-6.878-2.351-4.946a15.961 15.961 0 0 1-6.65-3.237Zm25.221 9.932-4.921-9.933A15.928 15.928 0 0 1 24 34.66c-.383 0-.759-.031-1.135-.058l5.4 11.483A1.151 1.151 0 0 0 30.4 46l1.521-4.265a1.153 1.153 0 0 1 1.472-.7l4.264 1.521a1.151 1.151 0 0 0 1.414-1.597ZM24 5.659a13 13 0 1 0 13 13 13 13 0 0 0-13-13Zm0 21a8 8 0 1 1 8-8 8 8 0 0 1-8 8Z" />
            </svg>
        );
    },
);
