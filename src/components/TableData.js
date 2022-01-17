import React from 'react'
import TableListData from './TableListData'

const TableData = ({data, handleDelete, handleUpdate}) => {

    return (
        <>
            <div className='section mt-5'>
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((data, index) => <TableListData handleUpdate={handleUpdate} handleDelete={handleDelete} index={index} data={data}/>)}
                    </tbody>
                </table> 
            </div>
        </>
    )
}

export default TableData
