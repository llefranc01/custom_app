import React from 'react';

const Table = () => {
  const data = [
    { id: 1, name: 'John Doe', age: 25, email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', age: 30, email: 'jane.smith@example.com' },
    { id: 3, name: 'Mike Johnson', age: 40, email: 'mike.johnson@example.com' },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;