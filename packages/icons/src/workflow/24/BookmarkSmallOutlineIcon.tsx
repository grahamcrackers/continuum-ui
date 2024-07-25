import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BookmarkSmallOutlineIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M30 12v21.726l-5.948-5.818L18 33.8V12h12m2.571-4H15.429A1.429 1.429 0 0 0 14 9.429V41.58a.747.747 0 0 0 .437.651.594.594 0 0 0 .268.064h.018a.725.725 0 0 0 .5-.211l8.82-8.586 8.745 8.554a.719.719 0 0 0 .5.206h.016a.7.7 0 0 0 .27-.054.707.707 0 0 0 .42-.649V9.429A1.429 1.429 0 0 0 32.571 8Z" />
            </svg>
        );
    },
);
