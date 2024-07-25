import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FlagExcludeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18.667 17.972A12.259 12.259 0 0 1 34 16.893V7.648a1 1 0 0 0-.751-.98 19.491 19.491 0 0 0-4.666-.568 18.988 18.988 0 0 0-4.112.454 1.093 1.093 0 0 1-1.3-1.085v-1.61a1.087 1.087 0 0 0-.814-1.06 19.5 19.5 0 0 0-4.6-.548 19.432 19.432 0 0 0-9.75 3v15.161a19.374 19.374 0 0 1 9.759-2.995 1.061 1.061 0 0 1 .901.555Z" />
                <rect height="32" rx="1" ry="1" width="4" x="2" y="2" />
                <path d="M27 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9ZM20 27a6.934 6.934 0 0 1 1.475-4.252l9.777 9.777A6.966 6.966 0 0 1 20 27Zm12.525 4.252-9.777-9.777a6.966 6.966 0 0 1 9.777 9.777Z" />
            </svg>
        );
    },
);
