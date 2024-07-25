import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ImageAlbumIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M37 20.7a3.7 3.7 0 1 0-3.7-3.7 3.7 3.7 0 0 0 3.7 3.7Z" />
                <path d="M46 6H6a2 2 0 0 0-2 2v4H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3v16H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3v4a2 2 0 0 0 2 2h40a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2ZM10 35a1 1 0 0 1-1 1H6v-4h3a1 1 0 0 1 1 1Zm0-20a1 1 0 0 1-1 1H6v-4h3a1 1 0 0 1 1 1Zm34 19.809-6.4-6.4a2.427 2.427 0 0 0-3.434 0l-3.729 3.729-9.176-9.176a2.43 2.43 0 0 0-3.435 0L12 28.786V10h32Z" />
            </svg>
        );
    },
);
