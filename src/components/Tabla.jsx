import React from 'react';
import { Table } from "flowbite-react";

const Tabla = ({ transactions }) => {
  return (
    <div className="overflow-x-auto shadow-[7px_9px_34px_6px_#2d3748] ">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Type</Table.HeadCell>
          <Table.HeadCell>Amount</Table.HeadCell>
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>Description</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {transactions && transactions.length > 0 ? (
            transactions.map((transaction, idx) => (
              <Table.Row key={idx} className="bg-gradient-to-r from-blue-400 to-blue-500 dark:border-gray-700 dark:bg-gray-800 text-black">
                <Table.Cell className="whitespace-nowrap font-medium  dark:text-white">
                  {transaction.type}
                </Table.Cell>
                <Table.Cell>${transaction.amount}</Table.Cell>
                <Table.Cell>{transaction.date}</Table.Cell>
                <Table.Cell>{transaction.description}</Table.Cell>
              </Table.Row>
            ))
          ) : (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell colSpan="4" className="text-center">No transactions found.</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  );
}

export default Tabla;
