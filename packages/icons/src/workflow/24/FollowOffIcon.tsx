import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FollowOffIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m11.658 37.325-.927.12a3.548 3.548 0 0 1-3.975-3.063l-.371-3.33 7.964-1.032.371 3.33a3.548 3.548 0 0 1-3.062 3.975Zm-2.62-33.69C6.991 1.248 4.7 1.023 3.083 6.044c-2.4 10.632-.538 14.923 2.839 21.9l7.964-1.032c-.854-6.592.787-9.552.443-12.2A21.473 21.473 0 0 0 9.038 3.635ZM18.732 35.305l1.379.233a15.905 15.905 0 0 1 10.964-14.559 44.426 44.426 0 0 0-.75-6.115C28.9 9.785 26.6 9.922 24.467 12.229a21.47 21.47 0 0 0-5.711 10.863c-.444 2.638 1.082 5.658-.024 12.213ZM20.333 38.824l-2.187-.369-.493 3.251a3.548 3.548 0 0 0 2.908 4.089l.922.156a3.535 3.535 0 0 0 1.885-.2 15.835 15.835 0 0 1-3.035-6.927Z" />
                <path d="M36.1 24.2A11.9 11.9 0 1 0 48 36.1a11.9 11.9 0 0 0-11.9-11.9Zm8.925 11.9a8.858 8.858 0 0 1-1.663 5.158l-12.42-12.42A8.9 8.9 0 0 1 45.025 36.1Zm-17.85 0a8.858 8.858 0 0 1 1.663-5.158l12.42 12.42A8.9 8.9 0 0 1 27.175 36.1Z" />
            </svg>
        );
    },
);
