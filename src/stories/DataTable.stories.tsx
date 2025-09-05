import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { DataTable, Column } from "../components/DataTable";
import { InputField } from "../components/InputField";

interface User {
  id: number;
  name: string;
  email: string;
}

const data: User[] = [
  { id: 1, name: "Jane Doe", email: "jane@example.com" },
  { id: 2, name: "John Smith", email: "john@example.com" },
];

const columns: Column<User>[] = [
  { key: "id", title: "ID", dataIndex: "id" },
  { key: "name", title: "Name", dataIndex: "name" },
  { key: "email", title: "Email", dataIndex: "email" },
];

const meta: Meta<typeof DataTable> = {
  title: "Components/DataTable",
  component: DataTable,
};
export default meta;

type Story = StoryObj<typeof DataTable>;

const Demo = () => {
  const [val, setVal] = useState("");

  return (
    <div className="space-y-6">
      <div className="max-w-sm">
        <InputField
          placeholder="you@example.com"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          helperText="We will never share your email."
          clearable
        />
      </div>

      <DataTable<User>
        data={data}
        columns={columns}
        selectable
        onRowSelect={(rows) => console.log(rows)}
      />
    </div>
  );
};

export const Default: Story = {
  render: () => <Demo />,
};
