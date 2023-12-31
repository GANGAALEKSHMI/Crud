import React from 'react'

function Users() {
    const [users, setUsers] = useState([{
        Name:"ganga",Email:"gangasnair29oct@gmail.com",Age:22
    }])
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className='w-50 bg-white rounded p-3'>
            <Link to="/create"className='btn btn-success'>Add +</Link>
         <table className='table'>
                <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Age</th>
                      <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                    {
                        users.map((user)=> {
                            return <tr>
                                <td>{user.Name}</td>
                                <td>{user.Email}</td>
                                <td>{user.Age}</td>
                                <tr><button>Edit</button><button>Delete</button></tr>
                            </tr>
                        })
                    }
                </tbody>
         </table>
        </div>
    </div>
  )
}

export default Users;