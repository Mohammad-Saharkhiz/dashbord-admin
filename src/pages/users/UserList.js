import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid'
import { userList } from '../../data'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import "./UserList.css"

export default function UserList() {

    const [userDatas, setUserDatas] = useState(userList)
    
    const userDelete = userID => {
        setUserDatas(prevState => {return prevState.filter(user => user.id != userID)})
    }
    
    const [columns, setColumns] = useState(
        [
            {
                field: "id",
                headerName: "ID",
                width: 90
            },
            {
                field: "user",
                headerName: "User",
                width: 300,
                renderCell: (params) => (
                    <Link to="/" className="container-user-info">
                        <img src={params.row.avatar} alt='image' className="img-user"/>
                        <span className="full-name-user">{params.row.userName}</span>
                    </Link>
                )
            },
            {
                field: "email",
                headerName: "Email",
                width: 250
            },
            {
                field: "status",
                headerName: "Status",
                width: 120
            },
            {
                field: "transactions",
                headerName: "Transaction",
                width: 160
            },
            {
                field: "action",
                headerName: "Action",
                width: 150,
                renderCell: (params) => (
                    <div className='wrapper-action'>
                        <Link to={`/user/${params.row.id}`}>
                            <button className="user-list-edit">Edit</button>
                        </Link>
                        <DeleteOutlineIcon  className='user-list-remove' onClick={() => userDelete(params.row.id)}/>
                    </div>
                )  
            },
        ]
    )

    return (
        <div className="user-list">
            <DataGrid 
                rows={userDatas}
                columns={columns}
                initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: 3,
                      },
                    },
                  }}
                disableSelectionOnclick
            />
        </div>
    )
}
