import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DocumentFragmentIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <circle cx="14.856" cy="13.5" r="2" />
                <path d="M35 4H1a1 1 0 0 0-1 1v26a1 1 0 0 0 1 1h34a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1ZM4 8h16v12.694a8.535 8.535 0 0 0-3.478-1.125c-1.653 0-2.4 2.2-4.052 2.2s-2.936-4.353-4.588-4.353C6.379 17.412 4 21.819 4 21.819Zm28 20H4v-2h28Zm0-6h-8v-2h8Zm0-6h-8v-2h8Zm0-6h-8V8h8Z" />
            </svg>
        );
    },
);
