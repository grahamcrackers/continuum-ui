import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BeakerCheckIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M36 24.1A11.9 11.9 0 1 0 47.9 36 11.9 11.9 0 0 0 36 24.1Zm-2.229 19.8-6.133-6.133a.5.5 0 0 1 0-.707L29.4 35.3a.5.5 0 0 1 .707 0L34 39.188l8.939-8.94a.5.5 0 0 1 .707 0l1.887 1.887a.5.5 0 0 1 0 .707L34.478 43.9a.5.5 0 0 1-.707 0Z" />
                <path d="M20.1 36a15.81 15.81 0 0 1 1.652-7.026L12.272 32l4.78-11.3A12 12 0 0 0 18 16.022V8h8v8.059a12 12 0 0 0 .919 4.607l.752 1.808a15.789 15.789 0 0 1 3.544-1.639l-.568-1.326A8 8 0 0 1 30 16.358V8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H14a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2v8.358a8 8 0 0 1-.647 3.151L4.389 40.424A4 4 0 0 0 8.066 46h15.579A15.826 15.826 0 0 1 20.1 36Z" />
            </svg>
        );
    },
);
