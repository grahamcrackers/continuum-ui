import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const JourneyDataIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M38 22c5.421 0 9.817 1.708 9.817 3.817s-4.4 3.817-9.817 3.817-9.817-1.708-9.817-3.817S32.579 22 38 22Zm9.717 8c-1.263 2-4.771 3-9.717 3s-8.454-1-9.721-3H28v4.454C28 36.092 32.579 38 38 38s10-1.908 10-3.546V30Zm0 8c-1.263 2-4.771 3-9.717 3s-8.454-1-9.721-3H28v6.454C28 46.092 32.579 48 38 48s10-1.908 10-3.546V38Z" />
                <path d="M24 34V14a4 4 0 0 1 4-4h6.349a6 6 0 1 0 0-4H28a8 8 0 0 0-8 8v8h-6.349a6 6 0 1 0 0 4H20v8a7.991 7.991 0 0 0 4 6.921ZM40 5.6A2.4 2.4 0 1 1 37.6 8 2.4 2.4 0 0 1 40 5.6ZM8 26.4a2.4 2.4 0 1 1 2.4-2.4A2.4 2.4 0 0 1 8 26.4Z" />
            </svg>
        );
    },
);
