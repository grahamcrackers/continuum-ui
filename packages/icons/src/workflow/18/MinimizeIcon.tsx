import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const MinimizeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M32.077 2.707a1 1 0 0 0-1.414 0l-6.484 6.484L21.2 6.206A.688.688 0 0 0 20.705 6a.7.7 0 0 0-.7.7v8.84a.5.5 0 0 0 .459.459H29.3a.7.7 0 0 0 .7-.7.685.685 0 0 0-.207-.49l-2.984-2.984 6.484-6.484a1 1 0 0 0 0-1.414ZM15.541 20H6.7a.7.7 0 0 0-.7.7.685.685 0 0 0 .207.49l2.984 2.984-6.484 6.489a1 1 0 0 0 0 1.414l1.216 1.216a1 1 0 0 0 1.414 0l6.484-6.484 2.984 2.985A.688.688 0 0 0 15.3 30a.7.7 0 0 0 .7-.7v-8.84a.5.5 0 0 0-.459-.46Z" />
            </svg>
        );
    },
);
