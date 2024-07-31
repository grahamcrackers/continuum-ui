import { cva } from "class-variance-authority";

/* <label class="spectrum-Checkbox spectrum-Checkbox--sizeM">
      <input type="checkbox" class="spectrum-Checkbox-input" id="checkbox-0">
      <span class="spectrum-Checkbox-box">
        <svg class="spectrum-Icon spectrum-UIIcon-Checkmark100 spectrum-Checkbox-checkmark" focusable="false" aria-hidden="true">
          <use xlink:href="#spectrum-css-icon-Checkmark100" />
        </svg>
        <svg class="spectrum-Icon spectrum-UIIcon-Dash100 spectrum-Checkbox-partialCheckmark" focusable="false" aria-hidden="true">
          <use xlink:href="#spectrum-css-icon-Dash100" />
        </svg>
      </span>
      <span class="spectrum-Checkbox-label">Checkbox</span>
    </label> */

/*
    @reference https://github.com/adobe/spectrum-css/blob/main/components/button/index.css
*/
export const checkboxVariants = cva("spectrum-Checkbox", {
    variants: {
        // variant: {
        //     accent: "bg-accent hover:bg-accent-hover focus-visible:bg-accent-focus spectrum-",
        //     destructive: "bg-negative text-destructive-foreground hover:bg-destructive/90",
        //     outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        //     secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        //     ghost: "hover:bg-accent hover:text-accent-foreground",
        //     link: "text-primary underline-offset-4 hover:underline",
        // },
        size: {
            sm: "spectrum-Checkbox--sizeS",
            md: "spectrum-Checkbox--sizeM",
            lg: "spectrum-Checkbox--sizeL",
            xl: "spectrum-Checkbox--sizeXL",
        },
    },
    defaultVariants: {
        // variant: "accent",
        size: "md",
    },
});
