import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CampaignDeleteIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M4.227 20.311H0A16.172 16.172 0 0 0 13.688 34v-4.228a12.006 12.006 0 0 1-9.461-9.461ZM13.688 6.228V2A16.172 16.172 0 0 0 0 15.688h4.228a12.005 12.005 0 0 1 9.46-9.46ZM27.772 15.688H32A16.172 16.172 0 0 0 18.312 2v4.228a12.005 12.005 0 0 1 9.46 9.46ZM27 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9Zm5 9.4a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5ZM20.112 16.809a4.289 4.289 0 1 0-4.465 5.455 12.344 12.344 0 0 1 4.465-5.455Z" />
            </svg>
        );
    },
);
