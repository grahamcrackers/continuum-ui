import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const EmailCheckIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M23.685 24.755a.54.54 0 0 0 .633 0L48 7.387V6a2.1 2.1 0 0 0-2.182-2H2.182A2.1 2.1 0 0 0 0 6v1.387ZM13.172 21.819 0 12.161v16.928l13.172-7.27zM20.1 36a15.814 15.814 0 0 1 2.068-7.825 4.432 4.432 0 0 1-1.023-.509L16.56 24.3 0 33.437V36a2.1 2.1 0 0 0 2.182 2h18.057a15.941 15.941 0 0 1-.139-2ZM48 25.59V12.162l-10.9 7.993A15.844 15.844 0 0 1 48 25.59ZM36 24.1A11.9 11.9 0 1 0 47.9 36 11.9 11.9 0 0 0 36 24.1Zm-2.229 19.8-6.133-6.133a.5.5 0 0 1 0-.707L29.4 35.3a.5.5 0 0 1 .707 0L34 39.188l8.939-8.94a.5.5 0 0 1 .707 0l1.887 1.887a.5.5 0 0 1 0 .707L34.479 43.9a.5.5 0 0 1-.708 0Z" />
            </svg>
        );
    },
);
