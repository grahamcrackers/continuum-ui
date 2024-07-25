import { Button } from "@continuum-ui/spectrum/button";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Spectrum/Button",
    component: Button,
    argTypes: {
        variant: {
            options: ["accent", "negative", "pending", "primary", "secondary", "white", "black"],
            control: { type: "select" },
        },
        size: {
            options: ["sm", "md", "lg", "xl"],
            control: { type: "select" },
        },
    },
    args: {
        variant: "accent",
        size: "md",
        disabled: false,
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: "Button",
    },
};
