import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BrowseIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M46.91 28.25S39.024 11.707 38 9c-.978-2.583-2.238-5-5-5-3.1 0-4.707 2.244-5 5a490.06 490.06 0 0 0-.484 5h-7.037c-.269-2.857-.468-4.871-.479-5-.244-2.8-1.366-5-5-5-2.762 0-3.9 2.467-5 5C9.122 11.024.889 28.622.889 28.622h.02A11 11 0 1 0 22 33c0-.338-.021-.67-.05-1h4.1c-.03.33-.05.662-.05 1a11 11 0 1 0 20.91-4.75ZM11 40.2a7.2 7.2 0 1 1 7.2-7.2 7.2 7.2 0 0 1-7.2 7.2Zm26 0a7.2 7.2 0 1 1 7.2-7.2 7.2 7.2 0 0 1-7.2 7.2Z" />
            </svg>
        );
    },
);
