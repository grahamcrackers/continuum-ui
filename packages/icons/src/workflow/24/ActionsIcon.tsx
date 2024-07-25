import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ActionsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m34.047 27.238-4.276 4.282 11.712 11.712a1.819 1.819 0 0 0 2.572 0l1.707-1.707a1.817 1.817 0 0 0 0-2.572ZM8.878 24.829l1.936-1.936c.71-.71-.029-1.717-.029-1.717l1.988-1.918a1.82 1.82 0 0 0 2.556-.016l1.081-1.082 2.082 2.082 4.279-4.28-2.082-2.081.706-.7a1.819 1.819 0 0 0 0-2.572l-.854-.854s2.512-2.82 3.04-3.348c2.22-2.22 7.134-.789 7.361-1.925s-10.911-5.35-17.009.748l-6.346 6.341a1.819 1.819 0 0 0 0 2.577l.429.413-1.881 1.964a1.209 1.209 0 0 0-1.739-.05l-1.937 1.936a.908.908 0 0 0 0 1.285l5.133 5.133a.908.908 0 0 0 1.286 0ZM14.721 39.485c-2.1.755-4.72 1.7-6.532 2.351l2.339-6.536ZM38.988 4.331 9.149 34.17a1.512 1.512 0 0 0-.353.551l-2.831 7.818a1.12 1.12 0 0 0 1.469 1.48l7.859-2.8a1.5 1.5 0 0 0 .559-.356L45.686 11a1.276 1.276 0 0 0 .114-1.795l-5.021-5a1.279 1.279 0 0 0-1.791.126Z" />
            </svg>
        );
    },
);
