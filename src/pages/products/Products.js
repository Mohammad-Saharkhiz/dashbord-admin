import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid'
import { products } from '../../data'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import "./Products.css"

export default function Products() {
    
    const [productsData, setProductsData] = useState(products)
    
    const productDelete = productID => {
        setProductsData(prevState => {return prevState.filter(product => product.id != productID)})
    }
    
    const [columns, setColumns] = useState(
        [
            {
                field: "id",
                headerName: "ID",
                width: 90
            },
            {
                field: "title",
                headerName: "Name",
                width: 300,
                renderCell: (params) => (
                    <Link to={`/product/${params.row.id}`} className="container-user-info">
                        <img src={params.row.avatar} alt='image' className="img-user"/>
                        <span className="full-name-user">{params.row.title}</span>
                    </Link>
                )
            },
            {
                field: "price",
                headerName: "Price",
                width: 120
            },
            {
                field: "action",
                headerName: "Action",
                width: 150,
                renderCell: (params) => (
                    <div className='wrapper-action'>
                        <Link to={`/product/${params.row.id}`}>
                            <button className="user-list-edit">Edit</button>
                        </Link>
                        <DeleteOutlineIcon  className='user-list-remove' onClick={() => productDelete(params.row.id)}/>
                    </div>
                )  
            },
        ]
    )

    return (
        <div className="user-list">
            <DataGrid 
                rows={productsData}
                columns={columns}
                initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: 3,
                      },
                    },
                  }}
                disableSelectionOnclick
                checkboxSelection
            />
        </div>
    )
}
