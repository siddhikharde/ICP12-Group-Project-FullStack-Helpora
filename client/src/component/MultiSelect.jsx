import React, { useState } from 'react'
import Input from './Input'

function MultiSelect({ selectedItems, placeholder, onRemoveItems, onAddItem }) {
    const [newItem, setNewItem] = useState("");

    return (
        <div className='flex flex-wrap w-full'>
            {
                selectedItems.map(item => (
                    <div key={item} className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full m-1 hover:bg-blue-200 hover:shadow-md transition duration-150">
                        <span className="truncate max-w-[100px]">{item}</span>
                        <span className="ml-2 text-[10px] cursor-pointer font-bold hover:text-red-500" onClick={() => onRemoveItems(item)}>x</span>
                    </div>
                ))
            }
            <div className='w-full'>
                <Input
                    type={"text"} placeholder={placeholder}
                    value={newItem}
                    onChange={(e) => {
                        setNewItem(e.target.value);
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            if (e.target.value != "") {
                                onAddItem(e.target.value)
                            }
                            setNewItem("")
                        }

                    }} />
            </div>
        </div>
    )
}

export default MultiSelect
