import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ImageNextIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <circle cx="19.5" cy="18.404" r="3.094" />
                <path d="M39.669 31.722 48 23l-8.331-8.708a1 1 0 0 0-1.669.743V20H26.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5H38v4.979a1 1 0 0 0 1.669.743Z" />
                <path d="M34 16v-6a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2v-8h-4v3.311c-1.92-2.034-5.14-4.645-6.682-4.583-2.409 0-3.5 4.006-6.753 4.006-2.2 0-3.366-7.519-5.838-7.519S6.479 28.587 4 31.7V12h26v4Z" />
            </svg>
        );
    },
);
