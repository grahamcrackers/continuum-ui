import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CampaignAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M6.227 20.311H2A16.172 16.172 0 0 0 15.688 34v-4.228a12.006 12.006 0 0 1-9.461-9.461ZM15.688 6.228V2A16.172 16.172 0 0 0 2 15.688h4.228a12.005 12.005 0 0 1 9.46-9.46ZM29.772 15.688H34A16.172 16.172 0 0 0 20.312 2v4.228a12.005 12.005 0 0 1 9.46 9.46ZM15.9 21.73a12.329 12.329 0 0 1 5.83-5.83 4.286 4.286 0 1 0-5.83 5.83ZM27 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9Zm5 9.4a.5.5 0 0 1-.5.5H28v3.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V28h-3.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H26v-3.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V26h3.5a.5.5 0 0 1 .5.5Z" />
            </svg>
        );
    },
);
