import React from 'react';

const EmployeeItem = ({ index, employee }) => {
    return (
        <tr key={index}>
            <td>{`${employee.name.first} ${employee.name.last}`}</td>
            <td>{employee.email}</td>
            <td>{employee.phone}</td>
            <td>{employee.nat}</td>
        </tr>
    );
};

export default EmployeeItem;
