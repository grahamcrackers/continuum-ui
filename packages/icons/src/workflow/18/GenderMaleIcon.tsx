import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GenderMaleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <circle cx="17.25" cy="3.948" r="3.948" />
                <path d="M17.475 9h-.45c-3.6 0-6.525 1.814-6.525 5.453v9.413a.562.562 0 0 0 .563.563h2.186L14.28 35.51a.563.563 0 0 0 .558.49h4.812a.562.562 0 0 0 .558-.489l1.038-11.082h2.192a.562.562 0 0 0 .562-.563v-9.413C24 10.814 21.079 9 17.475 9Z" />
            </svg>
        );
    },
);
