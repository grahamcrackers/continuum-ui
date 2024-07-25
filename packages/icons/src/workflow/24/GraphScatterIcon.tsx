import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GraphScatterIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <circle cx="24.8" cy="20.496" r="2.975" />
                <circle cx="22.096" cy="9.679" r="2.975" />
                <circle cx="41.025" cy="6.975" r="2.975" />
                <circle cx="27.504" cy="25.904" r="2.975" />
                <circle cx="35.617" cy="20.496" r="2.975" />
                <circle cx="16.688" cy="25.904" r="2.975" />
                <circle cx="16.688" cy="12.383" r="2.975" />
                <circle cx="22.096" cy="36.721" r="2.975" />
                <circle cx="8.574" cy="39.425" r="2.975" />
            </svg>
        );
    },
);
