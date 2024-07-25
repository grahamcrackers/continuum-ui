import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BrushIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M12.509 21.03a4.917 4.917 0 0 0-4.195 1.204 12.924 12.924 0 0 0-2.68 4.782c-.462 1.94-.899 3.772-3.359 4.772a.6.6 0 0 0-.34.712.898.898 0 0 0 .644.658c.585.146 1.253.284 1.977.398 2.607.41 7.48.738 10.806-1.652 1.238-.848 2.837-2.982 2.822-4.546a6.813 6.813 0 0 0-5.675-6.328ZM19.9 24.1c7.235-8.227 16.422-19.535 14.016-21.941S21.546 10.976 14.38 18.83a10.051 10.051 0 0 1 5.52 5.27Z" />
            </svg>
        );
    },
);
