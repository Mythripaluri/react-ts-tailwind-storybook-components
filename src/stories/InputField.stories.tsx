import type { Meta, StoryObj } from "@storybook/react";
import { InputField, type InputFieldProps } from "../components/InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  args: {
    label: "Email",
    placeholder: "you@example.com",
    variant: "outlined",
    size: "md",
  },
};
export default meta;

type Story = StoryObj<typeof InputField>;

export const Basic: Story = {};

export const Invalid: Story = {
  args: {
    invalid: true,
    errorMessage: "Please enter a valid email",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    type: "password",
    passwordToggle: true,
  },
};

export const Variants: Story = {
  render: (args: InputFieldProps) => (
    <div className="space-y-4">
      <InputField {...args} variant="outlined" />
      <InputField {...args} variant="filled" />
      <InputField {...args} variant="ghost" />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

export const Sizes: Story = {
  render: (args: InputFieldProps) => (
    <div className="space-y-4">
      <InputField {...args} size="sm" />
      <InputField {...args} size="md" />
      <InputField {...args} size="lg" />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};
