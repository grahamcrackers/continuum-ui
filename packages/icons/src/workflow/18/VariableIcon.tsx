import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const VariableIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M10.909 10.692c-.093-.123-.06-.278.155-.278h3.691c.216 0 .278.033.371.215l2.922 5.325h.062l3.077-5.385c.093-.155.123-.155.278-.155h3.26c.186 0 .248.093.156.248-1.078 1.721-3.448 5.508-4.648 7.2a399.724 399.724 0 0 0 4.956 7.479c.123.123.06.246-.156.246H21.25a.446.446 0 0 1-.4-.246l-3.077-5.354h-.03L14.572 25.4c-.062.122-.125.185-.338.185h-3.295a.173.173 0 0 1-.153-.278c1.293-1.937 3.415-5.322 4.738-7.262Zm-1.77 21.025a.991.991 0 0 0 .237-1.359A22.447 22.447 0 0 1 5.577 18a22.445 22.445 0 0 1 3.8-12.358.991.991 0 0 0-.238-1.359l-1.223-.872a1.015 1.015 0 0 0-1.428.253A25.936 25.936 0 0 0 2.077 18a25.942 25.942 0 0 0 4.411 14.337 1.014 1.014 0 0 0 1.428.253Zm18.945.873a1.014 1.014 0 0 0 1.428-.253A25.942 25.942 0 0 0 33.923 18a25.936 25.936 0 0 0-4.411-14.336 1.015 1.015 0 0 0-1.428-.253l-1.222.872a.991.991 0 0 0-.238 1.359A22.445 22.445 0 0 1 30.423 18a22.447 22.447 0 0 1-3.8 12.358.991.991 0 0 0 .237 1.359Z" />
            </svg>
        );
    },
);
