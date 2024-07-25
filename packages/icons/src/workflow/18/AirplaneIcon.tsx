import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AirplaneIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m34.254.34-.655.129a9.579 9.579 0 0 0-4.939 2.628L22.238 9.52 3.12 4.305a2 2 0 0 0-1.94.516L0 6l16.558 9.2-2.96 2.96a8.47 8.47 0 0 0-.874 1.024l-3.344 4.62L1 23.429l-1 1 6.368 3.537-2.024 2.796a.64.64 0 0 0 .894.894l2.796-2.024L11.57 36l1-1-.375-8.38 4.62-3.344a8.47 8.47 0 0 0 1.024-.874l2.96-2.96L30 36l1.18-1.18a2 2 0 0 0 .515-1.94L26.48 13.762l6.421-6.422a9.583 9.583 0 0 0 2.63-4.94l.127-.654A1.198 1.198 0 0 0 34.254.341Z" />
            </svg>
        );
    },
);
