import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CropLightningIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M16 27a10.962 10.962 0 0 1 .416-3H12V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v5H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5v15a1 1 0 0 0 1 1h7.046c-.03-.329-.046-.663-.046-1ZM24 16.416A10.962 10.962 0 0 1 27 16c.337 0 .671.016 1 .046V9a1 1 0 0 0-1-1H14v4h10ZM27 18a9 9 0 1 0 9 9 9 9 0 0 0-9-9Zm4.081 9.748-5.927 6.778a.613.613 0 0 1-1.027-.642l2-4.749-2.827-1.214a1.059 1.059 0 0 1-.379-1.67l5.928-6.777a.613.613 0 0 1 1.026.642l-2 4.749 2.825 1.214a1.058 1.058 0 0 1 .381 1.669Z" />
            </svg>
        );
    },
);
