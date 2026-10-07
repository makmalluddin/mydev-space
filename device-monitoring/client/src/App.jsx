import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

function App() {
  const URL_Example = "https://example.com/api/employees";
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  // Try fetch data 
  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await fetch('https://example.com/api/employees');
        if (!response.ok) {
          throw new Error(`Http Error : ${response.status}`);
        }
        const apiData = await response.json();

        setEmployee(apiData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setEmployee(null);
      } finally {
        setLoading(false);
      };
    };

    fetchData();

  }, [])

  return (
    <>
      <div className='flex flex-col h-screen'>
        <div className='flex items-center justify-center text-black'> Employee Data </div>
        <div>
          {loading && (
            <div className='flex items-center justify-center'> Loading employee data ..</div>
          )}

          {error && (
            <div className='flex items-center justify-center'> Failed to load employee data </div>
          )}

        </div>
        <div>
          {employee && employee.map(({ employee }) => {
            { employee }
          })}
        </div>
      </div>
    </>
  )
}

export default App
