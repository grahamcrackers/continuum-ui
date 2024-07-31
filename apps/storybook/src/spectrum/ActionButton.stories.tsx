import { ActionButton } from "@continuum-ui/spectrum/components/action-button";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Spectrum/ActionButton",
    component: ActionButton,
    argTypes: {
        variant: {
            options: ["", "quiet"],
            control: { type: "select" },
        },
        size: {
            options: ["sm", "md", "lg", "xl"],
            control: { type: "select" },
        },
    },
    args: {
        size: "md",
        emphasized: false,
        hold: false,
        disabled: false,
    },
} satisfies Meta<typeof ActionButton>;

export default meta;
type Story = StoryObj<typeof ActionButton>;

export const Default: Story = {
    args: {
        children: "Action Button",
    },
};
