import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SamplerIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M43.467 4.539c-2.32-2.32-4.706-2.386-6.815-.277L30.447 10.5l-2.016-2.016a2.008 2.008 0 0 0-2.829 0l-4.092 4.092a2 2 0 0 0 0 2.829l.881.88L6.381 32.3a6.593 6.593 0 0 0 9.324 9.324l16.01-16.01.886.887a2 2 0 0 0 2.829 0l4.091-4.091a2 2 0 0 0-.011-2.84l-2-1.972 6.257-6.198c2.215-2.216 2.02-4.541-.3-6.861ZM13.089 39A2.893 2.893 0 0 1 9 34.911L25.007 18.9l4.093 4.093Z" />
            </svg>
        );
    },
);
