import React from "react";
import Loading from "../../components/Loading/Loading.jsx";
import Error from "../../components/Error/Error.jsx";
import useFetchEmployees from "../../hooks/useFetchEmployees.js";
import EmployeesTable from "../../components/EmployeesTable/EmployeesTable.jsx";

export const Employees = () => {
  const { employees, loading, error } = useFetchEmployees();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }
  return (
    <>
      <div>
        <h1>Lista de Empleados</h1>

        <EmployeesTable employees={employees} />
      </div>
    </>
  );
};
