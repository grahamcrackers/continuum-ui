import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FeatureIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18 2.2A15.8 15.8 0 1 0 33.8 18 15.8 15.8 0 0 0 18 2.2Zm12.2 12.574-6.726 5.392 2.274 8.308a.355.355 0 0 1-.237.443.351.351 0 0 1-.306-.049L18 24.144l-7.206 4.731a.355.355 0 0 1-.543-.394l2.274-8.315L5.8 14.774a.355.355 0 0 1 .208-.639l8.61-.408 3.05-8.063a.355.355 0 0 1 .671 0l3.05 8.063 8.61.408a.355.355 0 0 1 .348.362.351.351 0 0 1-.147.277Z" />
            </svg>
        );
    },
);
