import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GiftIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M36.688.043c-2.8 0-8.87 2.178-12.354 8.305C20.849 2.221 14.78.043 11.979.043a5.979 5.979 0 1 0 0 11.957h24.709a5.979 5.979 0 1 0 0-11.957ZM11.979 9a2.979 2.979 0 1 1 0-5.957c1.712 0 6.288 1.5 9.247 5.957Zm24.709 0h-9.247c2.959-4.458 7.535-5.957 9.247-5.957a2.979 2.979 0 1 1 0 5.957ZM4 42a2 2 0 0 0 2 2h16V28H4ZM0 18v4a2 2 0 0 0 2 2h20v-8H2a2 2 0 0 0-2 2Zm28 26h14a2 2 0 0 0 2-2V28H28Zm18-28H28v8h18a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Z" />
            </svg>
        );
    },
);
