import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ImageAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <circle cx="31.5" cy="16.404" r="3.094" />
                <path d="M20.1 36a15.8 15.8 0 0 1 2.49-8.519c-2.739-2.758-5.975-6.266-7.079-6.266C14.1 21.214 6.478 26.587 4 29.7V10h40v12.275a15.947 15.947 0 0 1 4 3.315V8a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h19.28a15.843 15.843 0 0 1-1.18-6Z" />
                <path d="M36 24.1A11.9 11.9 0 1 0 47.9 36 11.9 11.9 0 0 0 36 24.1Zm8 13.4a.5.5 0 0 1-.5.5H38v5.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V38h-5.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H34v-5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V34h5.5a.5.5 0 0 1 .5.5Z" />
            </svg>
        );
    },
);
