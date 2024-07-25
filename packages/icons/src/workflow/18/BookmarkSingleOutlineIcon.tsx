import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BookmarkSingleOutlineIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M26 4v27.5l-6.522-6.523-1.412-1.411-1.416 1.411L10 31.6 10.011 4Zm1-2H9.012a1 1 0 0 0-1 1L8 35.551c0 .288.1.443.263.443a.517.517 0 0 0 .323-.162l9.476-9.438 9.375 9.376a.488.488 0 0 0 .318.177c.147 0 .243-.152.243-.429V3A1 1 0 0 0 27 2Z" />
            </svg>
        );
    },
);
