import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PageTagIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M16.2 30H2V10h28v6.2l2 2V5a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v26a1 1 0 0 0 1 1h17.2Z" />
                <path d="m35.668 26.106-9.88-9.879a.772.772 0 0 0-.546-.227h-8.47a.772.772 0 0 0-.772.772v8.471a.772.772 0 0 0 .226.546l9.879 9.88a.772.772 0 0 0 1.092 0l8.471-8.469a.772.772 0 0 0 0-1.094ZM20.4 22.948a2.548 2.548 0 1 1 2.548-2.548 2.548 2.548 0 0 1-2.548 2.548Z" />
            </svg>
        );
    },
);
