import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SandboxIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect x="2" y="2" width="14" height="30" rx="1" />
                <path d="M24 2h2v2h-2z" />
                <path d="M24 2h2v2h-2zM28 2h2v2h-2z" />
                <path d="M28 2h2v2h-2zM34 4V3a1 1 0 0 0-1-1h-1v2Z" />
                <path d="M34 4V3a1 1 0 0 0-1-1h-1v2ZM22 4V2h-1a1 1 0 0 0-1 1v1ZM20 6h2v2h-2z" />
                <path d="M20 6h2v2h-2zM20 10h2v2h-2z" />
                <path d="M20 10h2v2h-2zM20 14h2v2h-2z" />
                <path d="M20 14h2v2h-2zM20 18h2v2h-2z" />
                <path d="M20 18h2v2h-2zM20 22h2v2h-2z" />
                <path d="M20 22h2v2h-2zM20 26h2v2h-2z" />
                <path d="M20 26h2v2h-2zM22 32v-2h-2v1a1 1 0 0 0 1 1Z" />
                <path d="M22 32v-2h-2v1a1 1 0 0 0 1 1ZM24 30h2v2h-2z" />
                <path d="M24 30h2v2h-2zM28 30h2v2h-2z" />
                <path d="M28 30h2v2h-2zM32 6h2v2h-2z" />
                <path d="M32 6h2v2h-2zM32 10h2v2h-2z" />
                <path d="M32 10h2v2h-2zM32 14h2v2h-2z" />
                <path d="M32 14h2v2h-2zM32 18h2v2h-2z" />
                <path d="M32 18h2v2h-2zM32 22h2v2h-2z" />
                <path d="M32 22h2v2h-2zM32 26h2v2h-2z" />
                <path d="M32 26h2v2h-2zM34 31v-1h-2v2h1a1 1 0 0 0 1-1Z" />
                <path d="M34 31v-1h-2v2h1a1 1 0 0 0 1-1Z" />
            </svg>
        );
    },
);
