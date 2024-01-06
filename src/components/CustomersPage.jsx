import React, { useState } from 'react'
const inItCustomers = [
    {
        id: 1,
        fullName: "Quang Đặng",
        gender: "Male",
        address: "28 NTP",
        age: "20",
    },
    {
        id: 2,
        fullName: "Ly Ly",
        gender: "Female",
        address: "5 NTP",
        age: "40",
    },
];
export default function CustomersPage() {
    const [customers, setCustomers] = useState(inItCustomers);
    return (
        <>
            <div className='container mt-5'>
                <div className='head-control mb-3'>
                    <div className='d-flex justify-content-between align-items-start'>
                        <button className='btn btn-primary'>Create</button>
                        <div className='flex-grow-1 row justify-content-end' >
                            <div className='d-flex col-8 row'>
                                    <div className='col-6'>
                                        <div class="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                            <span className="input-group-text" id="basic-addon1">
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='col-3'>
                                        <select className='form-select'>
                                            <option>Choose gender</option>
                                            <option>Female</option>
                                            <option>Male</option>
                                        </select>
                                    </div>
                                    <div className='col-3'>
                                        <select className='form-select'>
                                            <option>Choose age</option>
                                            <option>10-30</option>
                                            <option>30-50</option>
                                            <option>50-70</option>
                                            <option>70-100</option>
                                        </select>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='table table-bordered'>
                    <table className="table table-borderd">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Fullname</th>
                                <th>Gender</th>
                                <th>Address</th>
                                <th>Age</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map((c) => (
                                <tr key={c.id}>
                                    <td>{c.id}</td>
                                    <td>{c.fullName}</td>
                                    <td>{c.gender}</td>
                                    <td>{c.address}</td>
                                    <td>{c.age}</td>
                                    <td>
                                        <button className="btn btn-warning me-2" onClick={() => { handleEdit(c.id) }}>Edit</button>
                                        <button className="btn btn-dark" onClick={() => handleDelete(c.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
