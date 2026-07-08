import React, { useState, useEffect } from 'react'
import MainLayout from '../components/Layouts/MainLayout'
import CardExpenseCategory from '../components/Fragments/CardExpenseCategory'
import { expensesService } from '../services/dataService'
import CircularProgress from '@mui/material/CircularProgress';

function expense() {
  const [expenses, setExpenses] = useState(null);

  const fetchExpenses = async () => {
    try {
      const data = await expensesService();
      setExpenses(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <MainLayout>
      <div className="text-2xl text-gray-02 mb-4">Expenses Comparison</div>

      {!expenses ? (
        <div className="flex flex-col justify-center items-center h-96 text-primary">
          <CircularProgress color="inherit" size={50} />
          <div className="mt-2">Loading Data</div>
        </div>
      ) : (
        <div className="grid sm:grid-cols-3 gap-6">
          {expenses.map((item) => (
            <CardExpenseCategory key={item.id} data={item} />
          ))}
        </div>
      )}
    </MainLayout>
  );
}

export default expense;