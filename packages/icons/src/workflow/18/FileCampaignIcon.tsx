import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FileCampaignIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20 2v10h10L20 2z" />
                <path d="M16.5 27A10.5 10.5 0 0 1 27 16.5a10.4 10.4 0 0 1 3 .488V14H19a1 1 0 0 1-1-1V2H7a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h12.225a10.424 10.424 0 0 1-2.725-7Z" />
                <path d="M19.022 26h2.762A5.307 5.307 0 0 1 26 21.784v-2.762A8.119 8.119 0 0 0 19.022 26Zm13.193 0h2.762A8.119 8.119 0 0 0 28 19.022v2.761A5.307 5.307 0 0 1 32.216 26Zm-10.431 2h-2.762A8.119 8.119 0 0 0 26 34.978v-2.762A5.307 5.307 0 0 1 21.784 28ZM28 32.216v2.761A8.119 8.119 0 0 0 34.978 28h-2.762A5.307 5.307 0 0 1 28 32.216ZM24.778 27A2.222 2.222 0 1 1 27 29.222 2.222 2.222 0 0 1 24.778 27Z" />
            </svg>
        );
    },
);
