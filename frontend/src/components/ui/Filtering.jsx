import React from 'react';

export const Filtering = ({ filter, setFilter }) => {
    return (
        <span className="flex justify-center items-center space-x-2">
            <label htmlFor="filter" className="font-medium">Filter:</label>
            <input
                id="filter"
                type="text"
                value={filter || ''}
                onChange={e => setFilter(e.target.value || undefined)}
                className="border rounded px-2 py-1"
                placeholder="Type to filter..."
            />
        </span>
    );
};
