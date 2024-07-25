import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CollectionEditIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M23.021 38H18V26h10v6.217l4-4V26h2.218l4-4H32V10h10v10.068c.065 0 .126-.021.192-.023h.093a4.954 4.954 0 0 1 3.531 1.455l.184.184V8a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h19.634ZM18 10h10v12H18Zm-4 28H4V26h10Zm0-16H4V10h10Z" />
                <path d="m47.668 29.01-4.68-4.68a.987.987 0 0 0-.7-.287h-.031a1.112 1.112 0 0 0-.753.33L27.055 38.82a.812.812 0 0 0-.2.342l-2.813 8.112c-.092.306.373.69.636.69a.221.221 0 0 0 .05-.005c.224-.052 6.944-2.461 8.117-2.814a.8.8 0 0 0 .336-.2L47.624 30.5a1.115 1.115 0 0 0 .328-.717.992.992 0 0 0-.284-.773ZM32.18 43.645c-1.754.527-4.5 1.747-6.02 2.2l2.189-6.022Z" />
            </svg>
        );
    },
);
