import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GradientIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M44 6H4a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h40a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm-2 32H6V10h36Z" />
                <path opacity=".8" d="M8 10h2v28H8z" />
                <path opacity=".9" d="M6 10h2v28H6z" />
                <path opacity=".75" d="M10 10h2v28h-2z" />
                <path opacity=".7" d="M12 10h2v28h-2z" />
                <path opacity=".65" d="M14 10h2v28h-2z" />
                <path opacity=".6" d="M16 10h2v28h-2z" />
                <path opacity=".55" d="M18 10h2v28h-2z" />
                <path opacity=".5" d="M20 10h2v28h-2z" />
                <path opacity=".45" d="M22 10h2v28h-2z" />
                <path opacity=".4" d="M24 10h2v28h-2z" />
                <path opacity=".35" d="M26 10h2v28h-2z" />
                <path opacity=".3" d="M28 10h2v28h-2z" />
                <path opacity=".25" d="M30 10h2v28h-2z" />
                <path opacity=".2" d="M32 10h2v28h-2z" />
                <path opacity=".15" d="M34 10h2v28h-2z" />
                <path opacity=".1" d="M36 10h2v28h-2z" />
                <path opacity=".05" d="M38 10h2v28h-2z" />
            </svg>
        );
    },
);
