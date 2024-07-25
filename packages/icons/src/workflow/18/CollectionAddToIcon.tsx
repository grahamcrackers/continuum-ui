import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CollectionAddToIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20 28h-6V18h6v-2h-6V6h8v8h2V6h8v8h2V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h17Zm-8 0H4V18h8Zm0-12H4V6h8Z" />
                <path d="m35.394 25.051-3.837-3.837 4.3-4.363A.5.5 0 0 0 35.5 16H22v13.494a.5.5 0 0 0 .854.358l4.33-4.265 3.837 3.837a1 1 0 0 0 1.414 0l2.96-2.959a1 1 0 0 0-.001-1.414Z" />
            </svg>
        );
    },
);
