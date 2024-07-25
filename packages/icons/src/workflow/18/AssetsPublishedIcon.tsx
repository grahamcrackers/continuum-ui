import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AssetsPublishedIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m19.237 26.8 9.084 5.063a.819.819 0 0 0 1.1-.366l6.485-16.146ZM16.083 27.763V35.2a.5.5 0 0 0 .824.381l5.32-4.525ZM7.662 24H4V4h28v7.8l1.96-.611H34V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h8.667Z" />
                <path d="M34.791 13.535 9.078 21.444a.409.409 0 0 0-.066.759l7.114 3.479Z" />
            </svg>
        );
    },
);
