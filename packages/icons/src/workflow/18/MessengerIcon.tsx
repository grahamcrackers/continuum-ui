import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const MessengerIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18 2.323c-8.6 0-15.578 6.609-15.578 14.761A14.336 14.336 0 0 0 7.091 27.6v7.562l6.675-3.872a16.414 16.414 0 0 0 4.234.555c8.6 0 15.578-6.609 15.578-14.761S26.6 2.323 18 2.323Zm1.639 19.713-4.049-4.154L8.2 22l8.167-8.942 4.083 3.978 7.463-4.048Z" />
            </svg>
        );
    },
);
