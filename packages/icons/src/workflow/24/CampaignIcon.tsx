import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CampaignIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <circle cx="24" cy="24" r="6" />
                <path d="M10.157 26H4.1A20 20 0 0 0 22 43.9v-6.06A14.013 14.013 0 0 1 10.157 26ZM10.157 22A14.013 14.013 0 0 1 22 10.16V4.1A20 20 0 0 0 4.1 22ZM37.842 22H43.9A20 20 0 0 0 26 4.1v6.06A14.013 14.013 0 0 1 37.842 22ZM37.842 26A14.013 14.013 0 0 1 26 37.84v6.06A20 20 0 0 0 43.9 26Z" />
            </svg>
        );
    },
);
