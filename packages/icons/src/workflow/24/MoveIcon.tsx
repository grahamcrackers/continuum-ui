import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const MoveIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m45.854 23.622-6.488-6.386a.785.785 0 0 0-.56-.236.8.8 0 0 0-.806.8V22H26V10h4.2a.8.8 0 0 0 .8-.806.785.785 0 0 0-.236-.56l-6.435-6.487a.5.5 0 0 0-.707 0l-6.386 6.487a.785.785 0 0 0-.236.56.8.8 0 0 0 .8.806H22v12H10v-4.2a.8.8 0 0 0-.806-.8.785.785 0 0 0-.56.236l-6.488 6.435a.5.5 0 0 0 0 .707l6.488 6.386a.785.785 0 0 0 .56.236.8.8 0 0 0 .806-.8V26h12v12h-4.2a.8.8 0 0 0-.8.806.783.783 0 0 0 .236.56l6.435 6.488a.5.5 0 0 0 .707 0l6.386-6.488a.785.785 0 0 0 .236-.56.8.8 0 0 0-.8-.806H26V26h12v4.2a.8.8 0 0 0 .806.8.785.785 0 0 0 .56-.236l6.488-6.435a.5.5 0 0 0 0-.707Z" />
            </svg>
        );
    },
);
