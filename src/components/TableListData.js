import React from 'react'

const TableListData = ({data, index, handleDelete, handleUpdate}) => {

    const statusDone = data.status === 1 ? 'text-decoration-line-through' : ''

    return (
        <>
            <tr key={index}>
                <th scope="row">{index + 1}</th>
                    <td className={`${statusDone} fst-italic`} >{data.title}</td>
                    <td>
                        <span onClick={() => {handleUpdate(index)}} className='me-2 badge bg-primary'>Done</span>
                        <span onClick={() => {handleDelete(index)}} className='badge bg-danger'>Delete</span>
                    </td>
            </tr>
        </>
    )
}

export default TableListData
