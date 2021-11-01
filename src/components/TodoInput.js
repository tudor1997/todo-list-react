import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        const {item, handleChange, handleSubmit, editItem} = this.props
        return (
         <div className="card card-body my-3">
             <form onSubmit={handleSubmit}>
                 <div className="input-group">
                     <div className="input-group flex-nowrap">
                         <div className="input-group-text bg-second text-black">
                                <i className="fas fa-book"></i>    
                         </div>
                         <input 
                            type="text" 
                            className="form-control text-capitalize" 
                            placeholder="add todo item" 
                            value={item} onChange={handleChange} 
                            />
                     </div>
                   
                 </div>
                 <div className="d-grid">
                 <button type="submit" 
                 disabled={item? false : true}
                 className={editItem ? "btn btn-outline-success mt-3" : "btn btn-outline-secondary mt-3 uppercase"}>
                     {editItem ? 'Edit Item' : 'Add item'}
                 </button>
                 </div>
               
             </form>
         </div>
        )
    }
}
