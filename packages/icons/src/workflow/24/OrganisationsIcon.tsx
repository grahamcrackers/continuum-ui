import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const OrganisationsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M42 4H18a2 2 0 0 0-2 2v10h12v28h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm-14 8h-8V8h8Zm12 24h-8v-4h8Zm0-8h-8v-4h8Zm0-8h-8v-4h8Zm0-8h-8V8h8Z" />
                <path d="M4 22v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V22a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Zm8 20H6v-4h6Zm0-8H6v-4h6Zm0-8H6v-4h6Zm10 8h-6v-4h6Zm0-8h-6v-4h6Z" />
            </svg>
        );
    },
);
