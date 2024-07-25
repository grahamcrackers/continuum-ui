import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TextBulletedAttachIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M12 17v2a1 1 0 0 0 1 1h6.7l3.8-3.8c.074-.074.163-.127.24-.2H13a1 1 0 0 0-1 1ZM33 4H13a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1ZM7.2 26h-.4A2.8 2.8 0 0 0 4 28.8v.4A2.8 2.8 0 0 0 6.8 32h.4a2.8 2.8 0 0 0 2.8-2.8v-.4A2.8 2.8 0 0 0 7.2 26Zm0-12h-.4A2.8 2.8 0 0 0 4 16.8v.4A2.8 2.8 0 0 0 6.8 20h.4a2.8 2.8 0 0 0 2.8-2.8v-.4A2.8 2.8 0 0 0 7.2 14ZM13 28a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h4.844a9.442 9.442 0 0 1-1.279-4ZM7.2 2h-.4A2.8 2.8 0 0 0 4 4.8v.4A2.8 2.8 0 0 0 6.8 8h.4A2.8 2.8 0 0 0 10 5.2v-.4A2.8 2.8 0 0 0 7.2 2ZM36 28.071l-4.7 4.7a7 7 0 0 1-9.9-9.9l5.407-5.407a5 5 0 0 1 7.071 7.071l-5.407 5.407a3 3 0 0 1-4.242-4.242l4.7-4.7 1.414 1.414-4.7 4.7a1 1 0 0 0 1.414 1.414l5.407-5.407a3 3 0 0 0-4.243-4.243l-5.407 5.407a5 5 0 0 0 7.071 7.071l4.7-4.7Z" />
            </svg>
        );
    },
);
