import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PropertiesCopyIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M5 12h3.325a6.956 6.956 0 0 0 13.35 0H43a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H21.675a6.956 6.956 0 0 0-13.35 0H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Zm10-5.3a3.3 3.3 0 1 1-3.3 3.3A3.3 3.3 0 0 1 15 6.7ZM20.223 38.662a3.31 3.31 0 1 1-.207-1.966c-.01-.231-.016-.463-.016-.7a15.97 15.97 0 0 1 .512-4.022A6.856 6.856 0 0 0 17 31a6.977 6.977 0 0 0-6.675 5H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5.325A6.977 6.977 0 0 0 17 45a6.88 6.88 0 0 0 4.69-1.849 15.875 15.875 0 0 1-1.467-4.489ZM5 26h17.325a7.1 7.1 0 0 0 .411 1.053 16.021 16.021 0 0 1 3-3.372 3.281 3.281 0 0 1 4.575-2.709 15.759 15.759 0 0 1 4.377-1.005A6.944 6.944 0 0 0 22.325 22H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1ZM36 24a12 12 0 1 0 12 12 12 12 0 0 0-12-12Zm8 13a1 1 0 0 1-1 1h-5v5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-5h-5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h5v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h5a1 1 0 0 1 1 1Z" />
            </svg>
        );
    },
);
