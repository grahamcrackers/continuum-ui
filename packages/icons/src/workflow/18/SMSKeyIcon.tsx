import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SMSKeyIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M21.179 28.77a1.856 1.856 0 1 1-1.857 1.856 1.856 1.856 0 0 1 1.857-1.856Zm1.667 5.182a4.395 4.395 0 0 0 3.683-3.686 4.489 4.489 0 0 0-.048-1.569l2.12-2.188v-1.957h2.361a.339.339 0 0 0 .338-.337v-2.362h2.361a.338.338 0 0 0 .339-.337v-3.374a.338.338 0 0 0-.338-.337h-1.546a.349.349 0 0 0-.239.1l-7.766 7.766a4.342 4.342 0 0 0-2-.442 4.451 4.451 0 0 0-4.3 4.682 4.387 4.387 0 0 0 5.035 4.041Z" />
                <path d="M33 4H3a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h5l3.536 6.839a.5.5 0 0 0 .928 0L16 28h.056a6.47 6.47 0 0 1 1.454-2.691 6.4 6.4 0 0 1 4.561-2.082h.01a7.018 7.018 0 0 1 1.49.154l2.529-2.527a4.44 4.44 0 0 1-.832-.322.648.648 0 0 1-.314-.611v-2.066l.406-.129a6.437 6.437 0 0 0 2.967.848h.057l1.316-1.327a2.914 2.914 0 0 0-1.282-.941l-.723-.318c-1.928-.9-2.748-1.986-2.748-3.619 0-2.174 1.646-3.578 4.2-3.578a5.914 5.914 0 0 1 2.631.477.539.539 0 0 1 .315.559v1.955l-.4.145-.242-.016a4.581 4.581 0 0 0-2.3-.535c-.443 0-1.475.082-1.475.842 0 .334.109.684 1.42 1.287l.613.271A5.14 5.14 0 0 1 32.2 15.8h1.467a2.179 2.179 0 0 1 .338.068V5A1 1 0 0 0 33 4ZM6.66 21.145a6.547 6.547 0 0 1-3.006-.613.658.658 0 0 1-.314-.611v-2.066l.406-.129a6.437 6.437 0 0 0 2.967.848c.688 0 1.51-.158 1.51-.908 0-.336-.109-.717-1.41-1.359l-.725-.318C4.16 15.084 3.34 14 3.34 12.369c0-2.174 1.647-3.578 4.2-3.578a5.9 5.9 0 0 1 2.631.477.539.539 0 0 1 .314.559v1.955l-.4.145-.242-.016a4.541 4.541 0 0 0-2.3-.535c-.443 0-1.475.082-1.475.842 0 .334.109.684 1.42 1.287l.613.271c2.072.951 2.953 2.062 2.953 3.719-.005 2.218-1.728 3.65-4.394 3.65Zm17.3-.383-.049.057-.162.135-.228.035h-2.14l-.189-.439a439.332 439.332 0 0 1-.1-6.67c-.377 1.342-.826 2.9-1.227 4.277l-.738 2.568-.422.25-1.705.013a.531.531 0 0 1-.553-.394 431.388 431.388 0 0 1-1.74-6.75 628.034 628.034 0 0 1-.248 6.643l-.006.133-.131.238-.314.119-2.035.012-.189-.461.639-11.41.457-.146 2.676-.008a.547.547 0 0 1 .543.367c.272.945 1.275 4.518 1.856 6.859.353-1.24.848-2.871 1.273-4.277.316-1.043.6-1.973.762-2.539l.027-.06.121-.176.275-.15 2.941-.024.207.369.48 11.225Z" />
            </svg>
        );
    },
);
