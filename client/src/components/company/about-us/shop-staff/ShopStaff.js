import React from 'react';

function ShopStaff({ employeesArr }) {
    return (
        <section className="shop-staff">
            <h2 className="shop-staff_title">Our Staff</h2>
            <div className="shop-staff__employees-container">
                {employeesArr.map(employee => (
                    <div className="shop-staff__employee" key={employee.employee_id}>
                        <figure className="shop-staff__employee__fig">
                            <img src="" alt="Employee avatar photo" className="shop-staff__employee__img"/>
                        </figure>
                        <h3 className="shop-staff__employee__name">{employee.first_name}</h3>
                        <p className="shop-staff__employee__level">{employee.skill_level}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ShopStaff;
