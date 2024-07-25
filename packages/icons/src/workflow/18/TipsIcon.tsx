import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TipsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M28.8 10.613A10.572 10.572 0 0 0 17.986.3a11.349 11.349 0 0 0-2.169.21A11.033 11.033 0 0 0 7.2 10.69C7.2 16.148 12 19.044 12 24v2h12v-2c0-5 4.8-8.048 4.8-13.387ZM12 28v2.367a1.5 1.5 0 0 0 .359.973l3.524 4.133a1.5 1.5 0 0 0 1.142.527h1.951a1.5 1.5 0 0 0 1.141-.527l3.525-4.133a1.5 1.5 0 0 0 .358-.973V28Z" />
            </svg>
        );
    },
);
