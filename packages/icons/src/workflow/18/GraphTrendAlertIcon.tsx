import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GraphTrendAlertIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m35 33.809-8.659-17.158a1.5 1.5 0 0 0-2.678 0L15 33.809A1.55 1.55 0 0 0 16.407 36h17.186A1.55 1.55 0 0 0 35 33.809ZM24.5 20h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5Zm1.491 12.4h-1.982a.409.409 0 0 1-.409-.409v-1.982a.409.409 0 0 1 .409-.409h1.982a.409.409 0 0 1 .409.409v1.983a.409.409 0 0 1-.409.408ZM33.094 2.061l-7.74 10.815a4.423 4.423 0 0 1 3.423 2.074l5.133-7.334A.5.5 0 0 0 34 7.33V2.352a.5.5 0 0 0-.906-.291ZM19.978 5.374l-5.45 14.992-4.081-4.082a.5.5 0 0 0-.674-.031L2.18 22.579a.5.5 0 0 0-.18.384v4.188a.5.5 0 0 0 .829.377l7.048-6.157 5.343 5.342 4.48-8.871 1.532-2.9a4.425 4.425 0 0 1 3.438-2.067l-3.775-7.554a.5.5 0 0 0-.917.053Z" />
            </svg>
        );
    },
);
