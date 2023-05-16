import React, { useState } from 'react'
import { getCategorys } from '../services/catagoryService'

const categorys = ["Beef", "Pasta", "Side"]

export default function CategoryFilter() {
    //const [categorys, setCategory] = useState('')

    // getCategorys().then((data) => {
    //     setCategory(data)
    // })

    return (
        <div className='category-container'>
            {
                categorys.map((category) =>
                    <button className='category-btn' key={category.id}>{category}</button>
                )
            }
        </div>
    )
}
