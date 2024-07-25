import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SettingsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M32.9 15.793h-3.111a11.953 11.953 0 0 0-1.842-4.507l2.205-2.206a1.1 1.1 0 0 0 0-1.56l-1.673-1.672a1.1 1.1 0 0 0-1.56 0l-2.205 2.205a11.925 11.925 0 0 0-4.507-1.841V3.1A1.1 1.1 0 0 0 19.1 2h-2.2a1.1 1.1 0 0 0-1.1 1.1v3.112a11.925 11.925 0 0 0-4.507 1.841l-2.2-2.205a1.1 1.1 0 0 0-1.56 0L5.848 7.52a1.1 1.1 0 0 0 0 1.56l2.205 2.206a11.953 11.953 0 0 0-1.842 4.507H3.1A1.1 1.1 0 0 0 2 16.9v2.2a1.1 1.1 0 0 0 1.1 1.1h3.111a11.934 11.934 0 0 0 1.842 4.507l-2.205 2.212a1.1 1.1 0 0 0 0 1.56l1.673 1.673a1.1 1.1 0 0 0 1.56 0l2.205-2.205a11.925 11.925 0 0 0 4.507 1.841V32.9A1.1 1.1 0 0 0 16.9 34h2.2a1.1 1.1 0 0 0 1.1-1.1v-3.112a11.925 11.925 0 0 0 4.507-1.841l2.205 2.205a1.1 1.1 0 0 0 1.56 0l1.673-1.673a1.1 1.1 0 0 0 0-1.56l-2.205-2.205a11.934 11.934 0 0 0 1.842-4.507H32.9A1.1 1.1 0 0 0 34 19.1v-2.2a1.1 1.1 0 0 0-1.1-1.107ZM22.414 18A4.414 4.414 0 1 1 18 13.586 4.414 4.414 0 0 1 22.414 18Z" />
            </svg>
        );
    },
);
