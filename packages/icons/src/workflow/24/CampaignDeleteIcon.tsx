import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CampaignDeleteIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M10.157 22A14.015 14.015 0 0 1 22 10.16V4.1A20 20 0 0 0 4.1 22ZM36 24.1A11.9 11.9 0 1 0 47.9 36 11.9 11.9 0 0 0 36 24.1Zm8 13.4a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 .5.5ZM37.423 20.172A15.8 15.8 0 0 1 43.539 22h.361A20 20 0 0 0 26 4.1v6.06a14 14 0 0 1 11.423 10.012ZM20.171 37.421A14 14 0 0 1 10.157 26H4.1A20 20 0 0 0 22 43.9v-.36a15.793 15.793 0 0 1-1.829-6.119ZM29.451 21.523a5.992 5.992 0 1 0-7.929 7.929 15.941 15.941 0 0 1 7.929-7.929Z" />
            </svg>
        );
    },
);
