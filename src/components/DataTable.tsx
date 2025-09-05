import React, { useState } from "react";

export interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}

export interface DataTableProps<T extends object> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
  emptyText?: string;
}

type SortState<T> = { key: keyof T; order: "asc" | "desc" } | null;

export function DataTable<T extends object>({
  data,
  columns,
  loading = false,
  selectable = false,
  onRowSelect,
  emptyText = "No data",
}: DataTableProps<T>) {
  const [sortState, setSortState] = useState<SortState<T>>(null);
  const [selectedRowKeys, setSelectedRowKeys] = useState<Set<number>>(
    new Set()
  );

  // Handle sorting
  const sortedData = React.useMemo(() => {
    if (!sortState) return data;

    const { key, order } = sortState;
    return [...data].sort((a, b) => {
      const aVal = a[key];
      const bVal = b[key];

      if (aVal === bVal) return 0;
      if (aVal == null) return order === "asc" ? -1 : 1;
      if (bVal == null) return order === "asc" ? 1 : -1;

      return order === "asc"
        ? String(aVal).localeCompare(String(bVal))
        : String(bVal).localeCompare(String(aVal));
    });
  }, [data, sortState]);

  // Handle row selection
  const toggleRow = (index: number) => {
    const newSet = new Set(selectedRowKeys);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setSelectedRowKeys(newSet);
    if (onRowSelect) {
      const selectedRows = Array.from(newSet).map((i) => sortedData[i]);
      onRowSelect(selectedRows);
    }
  };

  const toggleSort = (col: Column<T>) => {
    if (!col.sortable) return;
    setSortState((prev) => {
      if (!prev || prev.key !== col.dataIndex) {
        return { key: col.dataIndex, order: "asc" };
      }
      return {
        key: col.dataIndex,
        order: prev.order === "asc" ? "desc" : "asc",
      };
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!sortedData.length) {
    return <div>{emptyText}</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          {selectable && <th />}
          {columns.map((col) => (
            <th
              key={col.key}
              onClick={() => toggleSort(col)}
              style={{
                cursor: col.sortable ? "pointer" : "default",
                userSelect: "none",
              }}
            >
              {col.title}
              {sortState?.key === col.dataIndex &&
                (sortState.order === "asc" ? " 🔼" : " 🔽")}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, i) => (
          <tr key={i}>
            {selectable && (
              <td>
                <input
                  type="checkbox"
                  checked={selectedRowKeys.has(i)}
                  onChange={() => toggleRow(i)}
                />
              </td>
            )}
            {columns.map((col) => (
              <td key={col.key}>{String(row[col.dataIndex] ?? "")}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// import React from "react";

// export interface Column<T> {
//   key: string;
//   title: string;
//   dataIndex: keyof T;
//   sortable?: boolean;
// }

// export interface DataTableProps<T extends Record<string, any>> {
//   data: T[];
//   columns: Column<T>[];
//   loading?: boolean;
//   selectable?: boolean;
//   onRowSelect?: (selectedRows: T[]) => void;
//   emptyText?: string;
// }

// type SortState<T> = { key: keyof T; order: "asc" | "desc" } | null;

// export function DataTable<T extends Record<string, any>>({
//   data,
//   columns,
//   loading = false,
//   selectable = false,
//   onRowSelect,
//   emptyText = "No data",
// }: DataTableProps<T>) {}
