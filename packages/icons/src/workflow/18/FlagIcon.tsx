import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FlagIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <g>
                    <path d="M33.249 6.42a19.446 19.446 0 0 0-4.666-.566 19.033 19.033 0 0 0-4.113.453 1.093 1.093 0 0 1-1.3-1.084V3.609a1.087 1.087 0 0 0-.815-1.061A19.494 19.494 0 0 0 17.75 2 19.153 19.153 0 0 0 8 4.648v15.165a19.1 19.1 0 0 1 9.76-2.646 1.1 1.1 0 0 1 1.073 1.1v3.739a.991.991 0 0 0 1.406.908 19.28 19.28 0 0 1 12.515-1.435A1.007 1.007 0 0 0 34 20.511V7.4a1 1 0 0 0-.751-.98Z" />
                    <rect x="2" y="2" width="4" height="34" rx=".5" />
                </g>
            </svg>
        );
    },
);
