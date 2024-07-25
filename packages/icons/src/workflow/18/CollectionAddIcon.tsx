import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CollectionAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18.1 25a8.9 8.9 0 1 0 8.9-8.9 8.9 8.9 0 0 0-8.9 8.9Zm3.9-.5a.5.5 0 0 1 .5-.5H26v-3.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V24h3.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H28v3.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V26h-3.5a.5.5 0 0 1-.5-.5Z" />
                <path d="M15.084 28H14V18h2.893a12.368 12.368 0 0 1 1.743-2H14V6h8v7.769a12.2 12.2 0 0 1 2-.685V6h8v7.769a12.274 12.274 0 0 1 2 1.124V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h12.769a12.2 12.2 0 0 1-.685-2ZM12 28H4V18h8Zm0-12H4V6h8Z" />
            </svg>
        );
    },
);
