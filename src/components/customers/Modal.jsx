import React, { useEffect, useState } from 'react'

export default function Modal({type, customer, genders, onSaveUpdateBtn}) {

    const [customerModal, setCustomerModal] = useState({
        ...customer
    })

    const handleChange = (evt)=>{
        
        setCustomerModal({
            ...customerModal,
            [evt.target.name]: evt.target.value
        })
        
    }
    useEffect(()=>{
        setCustomerModal(customer);
    },[customer])
    const handleSaveUpdateBtn = (evt)=>{
        onSaveUpdateBtn(type, customerModal);
        var myModalEl = document.getElementById('myModal')
        var modal = bootstrap.Modal.getInstance(myModalEl)
        modal.hide();
    }

  return (
    <>
        <div className="modal" tabIndex={-1} id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title"> { type === 'create' ? "Create Customer" : "Edit customer"}</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className='form-group'>
                    <label className='form-label'>Fullname</label>
                    <input name='fullName' onChange={handleChange} value={customerModal.fullName} type="text" className="form-control" placeholder='Enter fullname' />
              </div>
              <div className='form-group'>
                    <label className='form-label'>Gender</label>
                    <select name='gender' onChange={handleChange} className='form-select' value={customerModal.gender}>
                        {
                            genders.map((g, index)=> (
                                <option value={g} key={index}>{g}</option>
                            ))
                        }
                    </select>
              </div>
              <div className='form-group'>
                    <label className='form-label'>Address</label>
                    <input name='address' onChange={handleChange} value={customerModal.address} type="text" className="form-control" placeholder='Enter address' />
              </div>
              <div className='form-group'>
                    <label className='form-label'>Age</label>
                    <input name='age' onChange={handleChange} value={customerModal.age} type="number" className="form-control" placeholder='Enter age' />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleSaveUpdateBtn}>
                {type==='create' ? 'Save' : 'Update'}
              </button>
            </div>
          </div>
        </div>
        </div>
    </>
  )
}
