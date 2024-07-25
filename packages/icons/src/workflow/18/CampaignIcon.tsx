import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CampaignIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <circle cx="18" cy="18" r="4.3" />
                <path d="M6.227 20.311H2A16.172 16.172 0 0 0 15.688 34v-4.227a12.007 12.007 0 0 1-9.461-9.462ZM29.773 20.311a12.007 12.007 0 0 1-9.461 9.462V34A16.172 16.172 0 0 0 34 20.311ZM15.688 6.228V2A16.171 16.171 0 0 0 2 15.688h4.228a12 12 0 0 1 9.46-9.46ZM29.772 15.688H34A16.171 16.171 0 0 0 20.312 2v4.228a12 12 0 0 1 9.46 9.46Z" />
            </svg>
        );
    },
);
