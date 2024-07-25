import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SamplerIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M22.457 17.037 8.232 31.262a2.471 2.471 0 1 1-3.494-3.494l14.225-14.225Zm7.271-14.931a3.591 3.591 0 0 0-2.546 1.055l-4.525 4.525-1.414-1.414a1 1 0 0 0-1.414 0l-3.362 3.361a1 1 0 0 0 0 1.414l1.081 1.082L3.324 26.354a4.47 4.47 0 1 0 6.322 6.322l14.225-14.224 1.082 1.081a1 1 0 0 0 1.414 0l3.361-3.361a1 1 0 0 0 0-1.415l-1.414-1.414 4.525-4.525a3.6 3.6 0 0 0 0-5.092l-.565-.565a3.592 3.592 0 0 0-2.546-1.055Z" />
            </svg>
        );
    },
);
