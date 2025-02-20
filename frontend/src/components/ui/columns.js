import ColumnFilter from './columnFilter';
import { useState,useEffect } from 'react';

export const COLUMNS = [
    {
        Header: '#',
        accessor: 'id',
        Filter: ColumnFilter,
        disableFilters: true,
    },
    {
        Header: 'Name',
        accessor: 'name',
        Filter: ColumnFilter,
        disableFilters: true,
    },
    {
        Header: 'Contact',
        accessor: 'contact',
        Filter: ColumnFilter,
        disableFilters: true,
    },
    {
        Header: 'Package',
        accessor: 'package',
        Filter: ColumnFilter,

    },
    {
        Header: 'Quantity',
        accessor: 'quantity',
        Filter: ColumnFilter,
        disableFilters: true,
       
    },
    {
        
        Header: 'Amount',
        accessor: 'amount',
        Filter: ColumnFilter,
        disableFilters: true,
    },
    {
        Header: 'Time',
        accessor: 'time',
        Filter: ColumnFilter,
        disableFilters: true,
    },
]
