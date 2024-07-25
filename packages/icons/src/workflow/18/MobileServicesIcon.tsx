import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const MobileServicesIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M34 4H2a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm-4 24H4V8h26Zm3-7.5a2.5 2.5 0 1 1 2.5-2.5 2.5 2.5 0 0 1-2.5 2.5Z" />
                <path d="M7.019 25.686a1.249 1.249 0 0 1-.707-.383 1.13 1.13 0 0 1 .094-1.647l4.252-3.668a.631.631 0 0 1 .854.041l2.357 2.4 4.667-7.27a.625.625 0 0 1 1.055.035l2.147 3.712 3.95-8.015a1.233 1.233 0 0 1 1.638-.5 1.159 1.159 0 0 1 .545 1.575l-5.507 10.923a.623.623 0 0 1-1.083.016l-2.291-3.959-4.276 6.661a.625.625 0 0 1-.963.085l-2.786-2.837-2.93 2.565a1.246 1.246 0 0 1-1.016.266Z" />
            </svg>
        );
    },
);
