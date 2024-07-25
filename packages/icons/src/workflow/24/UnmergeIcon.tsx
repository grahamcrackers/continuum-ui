import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const UnmergeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M37.332 26.2a.787.787 0 0 0-.527-.2.8.8 0 0 0-.8.8V32H24V14h12v5.2a.8.8 0 0 0 .8.8.787.787 0 0 0 .527-.2l8.524-8.445a.5.5 0 0 0 0-.7L37.332 2.2a.787.787 0 0 0-.527-.2.8.8 0 0 0-.8.8V8H20a2 2 0 0 0-2 2v10H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h13v10a2 2 0 0 0 2 2h16v5.2a.8.8 0 0 0 .8.8.787.787 0 0 0 .527-.2l8.524-8.445a.5.5 0 0 0 0-.7Z" />
            </svg>
        );
    },
);
