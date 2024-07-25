import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AnswerIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M42 6H6a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h12l6 10 6-10 11.994-.006a2 2 0 0 0 2-2L44 8a2 2 0 0 0-2-2Zm-21.2 4.828a.355.355 0 0 1 .242-.4A11 11 0 0 1 23.951 10a12.679 12.679 0 0 1 2.959.323.433.433 0 0 1 .29.4v2.593c0 3.025-.824 11.523-.968 12.6 0 .108-.05.217-.34.217h-3.88a.3.3 0 0 1-.339-.217c-.1-1.008-.873-9.471-.873-12.495ZM24 35a2.9 2.9 0 0 1-3.2-2.956A3.014 3.014 0 0 1 24 29a2.967 2.967 0 0 1 3.2 3.044A2.9 2.9 0 0 1 24 35Z" />
            </svg>
        );
    },
);
