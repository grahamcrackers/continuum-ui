import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DashboardIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M7.324 28.053a13.27 13.27 0 0 1-2.656-7.794A13.483 13.483 0 0 1 17.612 6.741a13.331 13.331 0 0 1 11.064 21.312.725.725 0 0 0 .1 1l.931.775a.733.733 0 0 0 1.048-.107 16 16 0 1 0-25.515 0 .729.729 0 0 0 1.045.107l.932-.776a.724.724 0 0 0 .107-.999Z" />
                <path d="M20.839 23.526a2.909 2.909 0 1 1-3.474-2.2c.748-.167 5.534-6.2 6.146-5.845.673.39-2.855 7.225-2.672 8.045Z" />
                <circle cx="7.818" cy="20.069" r="1.6" />
                <circle cx="10.727" cy="12.796" r="1.6" />
                <circle cx="25.273" cy="12.796" r="1.455" />
                <circle cx="18" cy="9.887" r="1.455" />
                <circle cx="28.182" cy="20.069" r="1.455" />
            </svg>
        );
    },
);
