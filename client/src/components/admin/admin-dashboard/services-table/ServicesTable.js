import React from 'react';

function ServicesTable({ servicesArr }) {
    function handleAddService() {
        
    }

    return (
        <div>
            <button onClick={handleAddService} className="add-employee-btn">
                <svg className="plus-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                <span className="add-employee-btn__span">Add Service</span>
            </button>
            <table className="employees-table">
                <thead className="employees-table__head">
                    <tr>
                        <th className="employees-table__header">Service Name</th>
                        <th className="employees-table__header">Price</th>
                        <th className="employees-table__header">Description</th>
                        <th className="employees-table__header">Action</th>
                    </tr>
                </thead>
                <tbody className="employees-table__body">
                    {servicesArr.map(service => (
                        <tr key={service.service_id}>
                            <td className="employees-table__body__data">{service.title}</td>
                            <td className="employees-table__body__data">${service.price}</td>
                            <td className="employees-table__body__data">{service.content.slice(0, 12)}...</td>
                            {/* <td className="employees-table__body__data"><button onClick={() => handleEditingUpdate(employee.employee_id)} className="employee-action">edit</button><button onClick={() => handleDelete(employee.employee_id)} className="employee-action">delete</button></td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ServicesTable
