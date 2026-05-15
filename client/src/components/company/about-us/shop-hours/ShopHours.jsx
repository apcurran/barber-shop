import React from "react";

import "./ShopHours.css";

function ShopHours() {
    return (
        <div className="shop-description__hours-table-container">
            <table className="shop-description__hours-table">
                <thead className="hours-table__head">
                    <tr className="hours-table__head__row">
                        <th className="hours-table__title">Shop Hours</th>
                    </tr>
                </thead>
                <tbody className="hours-table__body">
                    <tr>
                        <th className="hours-table__row__header">
                            Monday - Friday
                        </th>
                        <td className="hours-table__row__value">
                            8:00 A.M. - 9:30 P.M.
                        </td>
                    </tr>
                    <tr>
                        <th className="hours-table__row__header">Saturday</th>
                        <td className="hours-table__row__value">
                            8:00 A.M. - 10:00 P.M.
                        </td>
                    </tr>
                    <tr>
                        <th className="hours-table__row__header">Sunday</th>
                        <td className="hours-table__row__value">
                            10:00 A.M. - 5:00 P.M.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ShopHours;
