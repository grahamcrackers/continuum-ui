import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const UserIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M32.949 34a.993.993 0 0 0 1-1.053c-.661-7.184-8.027-9.631-10.278-9.827C22.026 22.977 22 21.652 22 20c0 0 3.532-3.943 3.532-8.958C25.532 5.617 22.445 2 18 2s-7.532 3.617-7.532 9.042C10.468 16.057 14 20 14 20c0 1.652-.026 2.977-1.674 3.12-2.251.2-9.617 2.643-10.278 9.827a.993.993 0 0 0 1 1.053Z" />
            </svg>
        );
    },
);
