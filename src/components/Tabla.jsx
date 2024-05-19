import { Table } from "flowbite-react";
import React from 'react'

const Tabla = (props) => {
  return (
    <div className="overflow-x-auto shadow-[7px_9px_34px_6px_#2d3748]">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Type</Table.HeadCell>
          <Table.HeadCell>Amount</Table.HeadCell>
          <Table.HeadCell>Data</Table.HeadCell>
          <Table.HeadCell>Description</Table.HeadCell>

        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {props.tipo}
            </Table.Cell>
            <Table.Cell>{props.amount}</Table.Cell>
            <Table.Cell>{props.data}</Table.Cell>
            <Table.Cell>{props.description}</Table.Cell>
            <Table.Cell>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
}

export default Tabla