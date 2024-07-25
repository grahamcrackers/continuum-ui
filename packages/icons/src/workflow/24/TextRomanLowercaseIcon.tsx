import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TextRomanLowercaseIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="4" rx="1" ry="1" width="26" x="18" y="8" />
                <rect height="4" rx="1" ry="1" width="26" x="18" y="24" />
                <rect height="4" rx="1" ry="1" width="26" x="18" y="40" />
                <path d="M12 4V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V4ZM10 6v7.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V6ZM14 20v-1.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V20ZM12 22v7.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V22ZM10 20v-1.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V20ZM8 22v7.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V22ZM14 36v-1.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V36ZM12 38v7.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V38ZM10 36v-1.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V36ZM8 38v7.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V38ZM6 36v-1.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V36ZM4 38v7.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V38Z" />
            </svg>
        );
    },
);
