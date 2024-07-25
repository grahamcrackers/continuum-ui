import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AEMScreensIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M12 2H2a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Zm0 20H2V4h10ZM23.798 9.34a3.34 3.34 0 1 1 3.34 3.34 3.34 3.34 0 0 1-3.34-3.34ZM32 18.702v6.088a.922.922 0 0 1-.91.934h-.908l-.91 9.342a.922.922 0 0 1-.908.934h-2.728a.922.922 0 0 1-.909-.934l-.909-9.342h-.909A.922.922 0 0 1 22 24.79v-6.088a4.901 4.901 0 0 1 4.833-4.967h.334A4.901 4.901 0 0 1 32 18.702ZM36 3v12a1 1 0 0 1-1 1h-1.239a7.488 7.488 0 0 0-1.44-2H34V4H18v10h3.66a7.455 7.455 0 0 0-1.415 2H17a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1Z" />
            </svg>
        );
    },
);
