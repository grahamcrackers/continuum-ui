import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const KeyExcludeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M36 24.1A11.9 11.9 0 1 0 47.9 36 11.9 11.9 0 0 0 36 24.1ZM44.925 36a8.859 8.859 0 0 1-1.663 5.158l-12.42-12.42A8.9 8.9 0 0 1 44.925 36Zm-17.85 0a8.859 8.859 0 0 1 1.663-5.158l12.42 12.42A8.9 8.9 0 0 1 27.075 36Z" />
                <path d="m22.653 26.493 8.916-8.972 2.241 2.241a15.641 15.641 0 0 1 6.48.424l2.139-2.138-5.693-5.693 1.641-1.642 5.693 5.694 3.293-3.293a1 1 0 0 0 0-1.415l-8.617-8.617a2 2 0 0 0-2.829 0L17.606 21.394a12 12 0 1 0 2.677 19.274c-1.313-4.433-.858-10.946 2.37-14.175ZM10 38a4 4 0 1 1 4-4 4 4 0 0 1-4 4Z" />
            </svg>
        );
    },
);
