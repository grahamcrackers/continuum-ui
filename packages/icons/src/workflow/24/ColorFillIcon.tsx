import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ColorFillIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M46.141 31.932a66.859 66.859 0 0 0-2.054-8.969c-.506-3.182-3.937-4.02-7.2-4.462L24.414 6.03a2 2 0 0 0-2.828 0l-4.364 4.364 6.192 6.192a2 2 0 1 1-2.828 2.829l-6.193-6.193L2.029 25.587a2 2 0 0 0 0 2.828l15.557 15.556a2 2 0 0 0 2.828 0l19.557-19.556a1.976 1.976 0 0 0 .478-1.964 1.817 1.817 0 0 1-.137-.325.564.564 0 0 1 .745.3c.67 1.267 1.224 3.8-.418 7.544-.509 1.16-1.873 2.9-1.873 4.391 0 2.325 1.227 3.775 3.748 3.775 2.215.003 4.04-2.074 3.627-6.204Z" />
                <path d="M10.681 3.853a2 2 0 0 0-2.829 2.828l6.541 6.541 2.829-2.828Z" />
            </svg>
        );
    },
);
