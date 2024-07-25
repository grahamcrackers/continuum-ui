import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BookmarkSmallIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M32.571 8H15.429A1.429 1.429 0 0 0 14 9.429V41.58a.747.747 0 0 0 .437.651.592.592 0 0 0 .286.063.725.725 0 0 0 .5-.211l8.82-8.586 8.745 8.554a.719.719 0 0 0 .5.206.7.7 0 0 0 .286-.054.707.707 0 0 0 .42-.649V9.429A1.429 1.429 0 0 0 32.571 8Z" />
            </svg>
        );
    },
);
