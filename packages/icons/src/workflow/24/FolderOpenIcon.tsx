import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FolderOpenIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M45.225 18H40v-6a2 2 0 0 0-2-2H23.266l-4.844-4.832A4 4 0 0 0 15.6 4H6a4 4 0 0 0-4 4v32a2 2 0 0 0 2 2h34.559a2 2 0 0 0 1.9-1.368l6.667-20A2 2 0 0 0 45.225 18ZM6 8h9.6l6.015 6H36v4H13.441a2 2 0 0 0-1.9 1.368L6 36Z" />
            </svg>
        );
    },
);
