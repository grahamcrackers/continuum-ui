import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const UnmergeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M27.2 20.206a.688.688 0 0 0-.49-.206.7.7 0 0 0-.7.7V24H20V10h6v3.3a.7.7 0 0 0 .7.7.688.688 0 0 0 .49-.206l5.69-6.469a.5.5 0 0 0 0-.65L27.2.206A.688.688 0 0 0 26.705 0a.7.7 0 0 0-.7.7V4H15a1 1 0 0 0-1 1v9H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h11v9a1 1 0 0 0 1 1h11v3.3a.7.7 0 0 0 .7.7.688.688 0 0 0 .49-.206l5.685-6.469a.5.5 0 0 0 0-.65Z" />
            </svg>
        );
    },
);
