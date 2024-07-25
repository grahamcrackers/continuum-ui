import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TextKerningIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M13.865 23.346c.793-2.809 2.594-8.931 6.014-19.05.072-.216.144-.288.324-.288h3.926c.18 0 .287.108.215.324L16.1 27.415a.314.314 0 0 1-.36.252h-4.179a.319.319 0 0 1-.36-.216L2.738 4.332c-.072-.18 0-.324.215-.324H7.1a.251.251 0 0 1 .287.216c3.422 9.471 5.762 16.457 6.41 19.122ZM38.076 4.224c-.035-.18-.072-.216-.252-.216h-5.006c-.142 0-.215.108-.215.252a5.487 5.487 0 0 1-.324 1.945l-7.418 21.1c-.037.252.035.36.252.36h3.6a.354.354 0 0 0 .394-.288L30.9 22h8.991l1.892 5.451a.364.364 0 0 0 .361.216h4.036c.214 0 .252-.108.214-.324ZM35.34 7.609h.035c.721 2.521 2.564 8.07 3.319 10.447h-6.666c1.082-3.277 2.736-8.035 3.312-10.447ZM45.5 36H20v-3.5a.5.5 0 0 0-.5-.5.492.492 0 0 0-.322.121l-6.986 5.5a.5.5 0 0 0 0 .76l6.986 5.5A.492.492 0 0 0 19.5 44a.5.5 0 0 0 .5-.5V40h25.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5Z" />
            </svg>
        );
    },
);
