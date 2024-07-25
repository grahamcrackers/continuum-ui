import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BracketsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M12.884 30.784a.726.726 0 0 0-.727-.727h-1.472a.7.7 0 0 1-.728-.667v-7.754c0-1.7-2.814-3.651-2.814-3.651s2.814-1.885 2.814-3.621v-7.8a.687.687 0 0 1 .715-.656h1.485a.727.727 0 0 0 .727-.728V2.727A.727.727 0 0 0 12.157 2h-.7a5.511 5.511 0 0 0-5.441 5.845c.013 2.807.027 5.752.027 6.642 0 1.19-1.569 2.305-2.677 2.943a.635.635 0 0 0-.007 1.123c1.108.653 2.684 1.783 2.684 2.93v6.7A5.51 5.51 0 0 0 11.486 34h.671a.727.727 0 0 0 .727-.727ZM23.111 30.784a.727.727 0 0 1 .727-.727h1.472a.7.7 0 0 0 .728-.667v-7.754c0-1.7 2.814-3.651 2.814-3.651s-2.814-1.888-2.814-3.621v-7.8a.687.687 0 0 0-.715-.656h-1.485a.728.728 0 0 1-.727-.728V2.727A.728.728 0 0 1 23.838 2h.7a5.508 5.508 0 0 1 5.44 5.845 2258.09 2258.09 0 0 0-.027 6.642c0 1.19 1.569 2.305 2.676 2.943a.635.635 0 0 1 .008 1.123c-1.108.653-2.684 1.783-2.684 2.93v6.7A5.507 5.507 0 0 1 24.509 34h-.671a.728.728 0 0 1-.727-.727Z" />
            </svg>
        );
    },
);
