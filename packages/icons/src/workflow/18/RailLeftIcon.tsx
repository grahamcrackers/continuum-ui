import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const RailLeftIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M34.875 4H1.125A1.146 1.146 0 0 0 0 5.167v25.666A1.146 1.146 0 0 0 1.125 32h33.75A1.146 1.146 0 0 0 36 30.833V5.167A1.146 1.146 0 0 0 34.875 4ZM9.3 24H2.7v-2h6.6Zm0-6H2.7v-2h6.6Zm0-6H2.7v-2h6.6ZM34 30H12V10h22Z" />
            </svg>
        );
    },
);
