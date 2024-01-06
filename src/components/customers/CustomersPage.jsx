import React, { useState } from "react";
import Modal from "./Modal";
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
const genders = [
    "All",
    "Male",
    "Female",
    
];

let currentId = 2;

export default function CustomersPage() {

    const [customers, setCustomers] = useState(inItCustomers);
    const [customerFrm, setCustomerFrm] = useState({
        "type": 'create',
        "customer": {
            id: 0,
            fullName: "",
            gender: "",
            address: "",
            age: "",
        
    }
    });
    const handleBtnCreate = () => {
        setCustomerFrm({
            type: 'create',
            customer: {
                id: 0,
                fullName: "",
                gender: "",
                address: "",
                age: "",
            }
        })
            var myModal = new bootstrap.Modal(document.getElementById('myModal'), {})
            myModal.show();
    };
    const onSaveUpdateBtn = (type, customerModal)=>{
        if(type === 'create'){
            customerModal.id = ++currentId;
            setCustomers([...customers, customerModal]);
            setCustomerFrm({
                ...customerFrm,
                customer: {
                    id: 0,
                    fullName: "",
                    gender: "",
                    address: "",
                    age: "",
                
                }
            });
        }else{
            let copyCustomers = [...customers];
            let indexObj = copyCustomers.findIndex(v => v.id === customerModal.id);
            copyCustomers.splice(indexObj, 1, customerModal);

            setCustomers(copyCustomers);

        }
    }
    const handleEdit = (id)=>{
        let cus = customers.find((v)=> v.id == id);
        setCustomerFrm({
            type: 'edit',
            customer: cus
        })
        var myModalEl = document.getElementById('myModal')
        var modal = bootstrap.Modal.getInstance(myModalEl) ?? new bootstrap.Modal(document.getElementById('myModal'), {});
        modal.show();
    }   
    const handleDelete = (id)=>{
      let checkConfirm = confirm('Are you sure you want to delete this customer');
      if(checkConfirm){
        let index = customers.findIndex((v)=> v.id === id);
        let delCustomers = [...customers];
        delCustomers.splice(index, 1);
        setCustomers(delCustomers);
      }
    }
  return (
    <>
      <div className="container mt-5">
        <button className="btn btn-primary" onClick={handleBtnCreate}>
          Create
        </button>
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
                  <button className="btn btn-warning me-2" onClick={()=>{ handleEdit(c.id)}}>Edit</button>
                  <button className="btn btn-dark" onClick={()=> handleDelete(c.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal type={customerFrm.type} customer={customerFrm.customer} genders= {genders} onSaveUpdateBtn = {onSaveUpdateBtn}/>
    </>
  );
}

