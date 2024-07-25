import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ExposureIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M9.286 10.65A19.662 19.662 0 0 0 5.052 30h10.654ZM32.1 5.855a19.7 19.7 0 0 0-19.562 1.9l3.287 9.908ZM43.828 25.436c.037-.475.072-.951.072-1.436a19.84 19.84 0 0 0-8.032-15.935l-8.084 5.866ZM35.007 24.032l-6.226 19.256A19.9 19.9 0 0 0 43.02 29.779ZM24.386 43.88 27.58 34H6.815A19.875 19.875 0 0 0 24 43.9c.13 0 .258-.011.386-.02Z" />
            </svg>
        );
    },
);
