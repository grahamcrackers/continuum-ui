import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FolderLockedIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M16 25.012a3.007 3.007 0 0 1 2.141-2.875A8.954 8.954 0 0 1 27.047 14c.158 0 .318 0 .477.012A8.754 8.754 0 0 1 34 17.486V9a1 1 0 0 0-1-1H2v21a1 1 0 0 0 1 1h13ZM16 6H2V3.5A1.5 1.5 0 0 1 3.5 2h7.672a2 2 0 0 1 1.414.586Z" />
                <path d="M35 24h-.955v-1.008a7 7 0 0 0-14 0V24H19a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V25a1 1 0 0 0-1-1Zm-6.566 7.422v1.928a.694.694 0 0 1-.694.694h-1.388a.694.694 0 0 1-.694-.694v-1.928a2.082 2.082 0 1 1 2.776 0ZM31.545 24h-9v-1.008a4.5 4.5 0 0 1 9 0Z" />
            </svg>
        );
    },
);
