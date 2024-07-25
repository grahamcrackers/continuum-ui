import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FilterEditIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m35.785 21.721-3.505-3.506a.739.739 0 0 0-.527-.215h-.023a.833.833 0 0 0-.564.247L20.344 29.069a.608.608 0 0 0-.153.256l-2.027 6c-.069.229.279.517.476.517a.313.313 0 0 0 .037 0c.168-.039 5.123-1.764 6-2.028a.6.6 0 0 0 .252-.151l10.824-10.829A.835.835 0 0 0 36 22.3a.743.743 0 0 0-.215-.579Zm-11.6 10.963c-1.314.395-3.3 1.229-4.43 1.568l1.56-4.431ZM30.946 2H3.054a1 1 0 0 0-.787 1.617L14 18.589V30a.992.992 0 0 0 1.68.825l3.98-4.153a1.22 1.22 0 0 0 .34-.845v-7.238L31.733 3.617A1 1 0 0 0 30.946 2Z" />
            </svg>
        );
    },
);
