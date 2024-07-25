import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CampaignCloseIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M10.157 26H4.1A20 20 0 0 0 22 43.9v-6.06A14.015 14.015 0 0 1 10.157 26ZM10.157 22A14.015 14.015 0 0 1 22 10.16V4.1A20 20 0 0 0 4.1 22ZM37.842 22H43.9A20 20 0 0 0 26 4.1v6.06A14.015 14.015 0 0 1 37.842 22ZM36 24.1A11.9 11.9 0 1 0 47.9 36 11.9 11.9 0 0 0 36 24.1Zm8.132 17.2a.5.5 0 0 1 0 .707l-2.122 2.125a.5.5 0 0 1-.707 0l-5.3-5.3-5.3 5.3a.5.5 0 0 1-.707 0l-2.128-2.122a.5.5 0 0 1 0-.707l5.3-5.3-5.3-5.3a.5.5 0 0 1 0-.707l2.122-2.121a.5.5 0 0 1 .707 0l5.3 5.3 5.3-5.3a.5.5 0 0 1 .707 0l2.122 2.121a.5.5 0 0 1 0 .707l-5.3 5.3ZM29.451 21.523a5.992 5.992 0 1 0-7.929 7.929 15.941 15.941 0 0 1 7.929-7.929Z" />
            </svg>
        );
    },
);
