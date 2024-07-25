import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BidRuleAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M17.337 11.747 27.748 1.338a1.051 1.051 0 0 1 1.486 0l1.485 1.485a1.052 1.052 0 0 1 0 1.488L20.31 14.72a1.052 1.052 0 0 1-1.488 0l-1.484-1.486a1.052 1.052 0 0 1 0-1.487ZM36 24.1A11.9 11.9 0 1 0 47.9 36 11.9 11.9 0 0 0 36 24.1Zm8 13.4a.5.5 0 0 1-.5.5H38v5.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V38h-5.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H34v-5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V34h5.5a.5.5 0 0 1 .5.5ZM26.941 22.942 24 20 2.586 39.758a2 2 0 0 0 0 2.828l2.828 2.828a2 2 0 0 0 2.828 0L20.63 31.987a15.906 15.906 0 0 1 6.311-9.045ZM35.894 20.105 40 16l-8-8-8 8 5.5 5.5a15.809 15.809 0 0 1 6.394-1.395ZM44.45 22.548l2.25-2.254a1.053 1.053 0 0 0 0-1.487l-1.483-1.487a1.053 1.053 0 0 0-1.487 0l-3.394 3.394a15.806 15.806 0 0 1 4.114 1.834Z" />
            </svg>
        );
    },
);
