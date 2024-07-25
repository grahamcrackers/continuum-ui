import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GraphHistogramIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M43.388 38h-4.776a.613.613 0 0 0-.612.612v-7.775a.837.837 0 0 0-.837-.837h-4.326a.837.837 0 0 0-.837.837V22.92a.92.92 0 0 0-.92-.92h-4.16a.92.92 0 0 0-.92.92V11a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v14a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v11H4.882a.882.882 0 0 0-.882.882V44h40v-5.388a.613.613 0 0 0-.612-.612Z" />
            </svg>
        );
    },
);
