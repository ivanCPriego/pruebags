import EmployeeItem from "../EmployeeItem/EmployyeItem.jsx";
import React from "react";

const EmployeesTable = ({ employees }) => {
    return (
        <table className="table">
            <thead className="table-dark">
            <tr>
                <th scope="col">Nombre</th>
                <th>Correo Electrónico</th>
                <th>Teléfono</th>
                <th>Nacionalidad</th>
            </tr>
            </thead>
            <tbody>
            {employees.map((employee, index) => (
                <EmployeeItem key={index} employee={employee}/>
            ))}
            </tbody>
        </table>
    );
}

export default EmployeesTable;