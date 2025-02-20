import React from 'react';
import { useTable,useGlobalFilter, useFilters} from 'react-table';
import 'tailwindcss/tailwind.css';
import { useMemo } from 'react';
import {COLUMNS} from './ui/columns.js'
import { MOCK_DATA } from './ui/MOCK_DATA';
import {Filtering} from './ui/Filtering';



export const TicketTable = () => {
  const columns = useMemo(()=>COLUMNS, []);
  const data = useMemo(()=>MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable({ columns, data },useFilters,useGlobalFilter);

  const { globalFilter } = state;
  return (
    <>
    <Filtering filter={globalFilter} setFilter={setGlobalFilter} />
    <div className="container mx-auto">
      <table {...getTableProps()} className="min-w-full bg-white">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} className="w-full bg-gray-200 sm:table-row">
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  className="px-4 py-2 border-b border-gray-200 text-left text-sm font-medium text-gray-700"
                >
                  {column.render('Header')}
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr  {...row.getRowProps()} className="w-full border-b border-gray-200 sm:table-row">
                {row.cells.map(cell => (
                  <td
                    {...cell.getCellProps()}
                    className="px-4 py-2 text-sm text-gray-700"
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </>
  );
};
