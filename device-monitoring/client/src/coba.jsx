import React, { useState, useEffect } from 'react';

const EmployeeList = () => {
  // 2. Mendefinisikan State sesuai ketentuan
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // 1. Melakukan fetch data ke endpoint
    const fetchEmployees = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://example.com/api/employees');

        if (!response.ok) {
          throw new Error('Gagal mengambil data');
        }

        const data = await response.json();
        // Asumsi data yang dikembalikan berupa array of objects, misal: [{ id: 1, name: "Budi Santoso" }]
        setEmployees(data);
        setError(false);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []); // Empty dependency array agar fetch berjalan sekali saat komponen dimount

  // 3. Ketentuan Tampilan (Kondisional Rendering)

  // 3a. Jika loading
  if (loading) {
    return <div>Loading employee data...</div>;
  }

  // 3b. Jika gagal
  if (error) {
    return <div>Failed to load employee data.</div>;
  }

  // 3c & 4. Jika sukses tampilkan daftar nama menggunakan .map()
  return (
    <div className='text-black'>
      <h2>Employee List</h2>
      {/* Menggunakan ordered list type "a" untuk menyamai contoh output */}
      <ol type="a">
        {employees.map((employee, index) => (
          // Menggunakan employee.id sebagai key jika ada, jika tidak fallback ke index
          <li key={employee.id || index}>{employee.name}</li>
        ))}
      </ol>
    </div>
  );
};

export default EmployeeList;
