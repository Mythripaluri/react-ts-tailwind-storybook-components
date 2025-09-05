import { useState } from "react";
import { InputField } from "./components/InputField";
import { DataTable, Column } from "./components/DataTable";

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

function App() {
  const [val, setVal] = useState("");

  return (
    <div className="p-6 space-y-6">
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
        onRowSelect={(rows) => console.log("Selected rows:", rows)}
      />
    </div>
  );
}

export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
