import React from 'react';

 const ColumnFilter = ({ column }) => {
    const { filterValue, setFilter } = column;

    return (
        <span className="flex items-center space-x-2">
            <select
                value={filterValue || ''}
                onChange={e => setFilter(e.target.value)}
                className="p-2 border border-gray-300 rounded"
            >
                <option value="">ALL PACKAGES</option>
                <option value="REGULAR">REGULAR</option>
                <option value="VIP">VIP</option>
                <option value="VVIP">VVIP</option>
            </select>
        </span>
    );
};
export default ColumnFilter;