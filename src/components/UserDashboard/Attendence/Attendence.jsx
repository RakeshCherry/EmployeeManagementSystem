import './Attendence.css';
import { useEffect, useState } from 'react';
import axios from "axios"
import Formtable from './Formtable';



axios.defaults.baseURL = "http://localhost:8080/"

function Attendence() {

  const [addSection,setAddSection] = useState(false)
  const [editSection,setEditSection] = useState(false)
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [formData,setFormData] = useState({
    name : "",
    email : "",
    mobile : "",
  })
  const [formDataEdit,setFormDataEdit] = useState({
    name : "",
    email : "",
    mobile : "",
    log_In : "",
    log_Out : "",
    status : {
      present : "Present",
      absent : "Absent",
      halfDay : "Half Day"
    },
    _id : ""
  })

  const [dataList,setDataList] = useState([])

  const handleOnChange = (e)=>{
    const {value, name} = e.target
    setFormData((preve)=>{
      return {
        ...preve,
        [name] : value.toLowerCase()
      }

    })
  }


  const handleSubmit = async(e)=>{
    e.preventDefault()
    const data = await axios.post("/create",formData)
    console.log(data)
    if(data.data.success){
      setAddSection(false)
      alert(data.data.message)
      getFetchData()
      setFormData({
        name : "",
        email : "",
        mobile : "",
        log_In : "",
        log_Out : "",
        status : {
          present : "Present",
          absent : "Absent",
          halfDay : "Half Day"
        }
      })
    }
  }

  const getFetchData = async()=>{
    const data = await axios.get("/")
    console.log(data)
    if(data.data.success){
      setDataList(data.data.data)
    }
  }
  useEffect(()=>{
  getFetchData()
  },[])

  const handleDelete = async(id)=>{
    const data = await axios.delete("/delete/"+id)
    if(data.data.success){
      getFetchData()
      alert(data.data.message)
    }
   
  }

  const handleUpdate = async(e)=>{
    e.preventDefault()
    const data = await axios.put("/update/",formDataEdit)
    if(data.data.success){
      getFetchData()
      alert(data.data.message)
      setEditSection(false)
    }

  }
   const handleEditOnChange = async(e)=>{
    const {value, name} = e.target
    setFormDataEdit((preve)=>{
      return {
        ...preve,
        [name] : value
      }

    })
   }

   const handleEdit = (id)=>{
    setFormDataEdit(id)
    setEditSection(true)
   }
  return (
    <>
    <section class= "attendence-container">
      <div class="container">
          <h1 className='details'>EMPLOYEE DETAILS</h1>
          <div className='attendece_editBtn'>
          <button class="btn attemdeceBtn btn-primary px-4 fs-6 fw-bold" onClick={()=>setAddSection(true)}>ADD</button>
          <button class="btn-2 btn-edit px-4" onClick={()=>handleEdit(selectedEmployee._id)}>Edit</button>
          <button class="btn-2 btn-delete" onClick={()=>handleDelete(selectedEmployee._id)}>Delete</button>
          </div>
          {
            addSection && (
              <Formtable
              handleSubmit={handleSubmit}
              handleOnChange={handleOnChange}
              handleClose={()=>setAddSection(false)}
              rest={formData}
              />
            )
          }
          {
            editSection && (
              <Formtable
              handleSubmit={handleUpdate}
              handleOnChange={handleEditOnChange}
              handleClose={()=>setEditSection(false)}
              rest={formDataEdit}
              />
            )
          }

          <div className= "table-container mt-3">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Employee</th>
                  <th>Role</th>
                  <th>Department</th>
                  <th>DOJ</th>
                  <th>Status</th>
                  <th>Check-in</th>
                  <th>Check-out</th>
                  <th>Work hours</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                { dataList[0] ? (
                  dataList.map((el)=>{
                    return(
                      <tr>
                        {/* <td>{SlNumber}</td> */}
                        <td>{el._id}</td>
                        <td>{el.name}</td>
                        <td>{el.email}</td>
                        {/* <td>{el.mobile}</td> */}
                        <td></td>
                        <td></td>
                        <td>{el.status}</td>
                        <td>
                        {el.log_In}
                        {/* <button class="btn-2 btn-edit px-4" onClick={()=>handleEdit(el)}>Edit</button> */}
                        </td>
                        <td>
                        {el.log_Out}
                        {/* <button class="btn-2 btn-delete" onClick={()=>handleDelete(el._id)}>Delete</button> */}
                        </td>
                      </tr>
                    )
                  }))
                  : 
                  (
                    <p class="empty-table">No Data Available</p>
                  )
                } 
              </tbody>
            </table>
          </div>
         
      </div>
    </section>
   </>
  );
}

export default Attendence;
