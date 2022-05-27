import * as React from 'react';
import Table from 'rc-table'
import { ReadonlyRecord } from 'readonly-types/dist';
import { ColumnsType, DefaultRecordType, TableLayout } from 'rc-table/lib/interface';
import { TableProps } from 'rc-table/lib/Table';

import './table.css';

export interface ITableComponentProps {
    data: DefaultRecordType[] | undefined;
    columns: ColumnsType<DefaultRecordType> | undefined;
}


//https://table-react-component.vercel.app/demo/animation
export default function TableComponent({ data, columns }: ITableComponentProps) {

    return (
        <Table
            sticky
            scroll={{ "x": "true", "y": "true" }}
            tableLayout='auto'
            onHeaderRow={(columns, index) => {
                return {
                    onClick: () => {
                        console.log('onClick', columns, index);
                    },
                    onMouseEnter: () => {
                        console.log('onMouseEnter', columns, index);
                    },
                };
            }}
            columns={columns}
            data={data}
        />
    );
}
