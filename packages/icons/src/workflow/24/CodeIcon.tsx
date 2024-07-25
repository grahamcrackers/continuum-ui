import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CodeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M47.323 25.414 36.165 36.749a1 1 0 0 1-1.425 0l-1.658-1.685a1 1 0 0 1 0-1.4L42.59 24l-9.508-9.662a1.006 1.006 0 0 1 0-1.4l1.658-1.688a1 1 0 0 1 1.425 0l11.158 11.335a2.029 2.029 0 0 1 0 2.829ZM.677 22.585 11.835 11.25a1 1 0 0 1 1.425 0l1.658 1.685a1.006 1.006 0 0 1 0 1.4L5.41 24l9.508 9.662a1 1 0 0 1 0 1.4l-1.658 1.687a1 1 0 0 1-1.425 0L.677 25.414a2.029 2.029 0 0 1 0-2.829ZM29.1 6.3h-1.933a1 1 0 0 0-.966.74l-8.416 31.284a1 1 0 0 0 .965 1.259h1.929a1 1 0 0 0 .966-.74L30.061 7.56A1 1 0 0 0 29.1 6.3Z" />
            </svg>
        );
    },
);
