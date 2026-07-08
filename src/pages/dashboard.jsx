import React, { useContext, useEffect, useState } from 'react'
import MainLayout from '../components/Layouts/MainLayout'
import Card from '../components/Elements/Card'
import CardBalance from '../components/Fragments/CardBalance'
import CardGoal from '../components/Fragments/CardGoal'
import CardUpcomingBill from '../components/Fragments/CardUpcomingBill'
import CardRecentTransaction from '../components/Fragments/CardRecentTransaction'
import CardStatistic from '../components/Fragments/CardStatistic'
import CardExpenseBeakdown from '../components/Fragments/CardExpenseBeakdown'
import {
  transactions,
  balances,
  expensesStatistics
} from '../data'
import { billService, goalService } from '../services/dataService'
import { expensesService } from '../services/dataService'
import { AuthContext } from '../context/authContext'
import AppSnackbar from '../components/Elements/AppSnackbar'

function dashboard() {
  const [goals, setGoals] = useState({});
  const [bills, setBills] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const { logout } = useContext(AuthContext);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const fetchGoals = async () => {
    try {
      const data = await goalService();
      setGoals(data);
    } catch (err) {
      setSnackbar({
        open: true,
        message: "Gagal mengambil data goals",
        severity: "error",
      });
      if (err.status === 401) logout();
    }
  };

  const fetchBills = async () => {
    try {
      const data = await billService();
      setBills(data);
    } catch (err) {
      if (err.status === 401) logout();
    }
  };

  const fetchExpenses = async () => {
    try {
      const data = await expensesService();
      setExpenses(data);
    } catch (err) {
      if (err.status === 401) logout();
    }
  };

  // cukup satu useEffect - sebelumnya fetchGoals() dipanggil 2x karena ada 2 useEffect terpisah
  useEffect(() => {
    fetchGoals();
    fetchBills();
    fetchExpenses();
  }, []);

  return (
    <>
      <MainLayout>
        <div className="grid sm:grid-cols-12 gap-6">
          <div className="sm:col-span-4">
            <CardBalance data={balances}/>
          </div>
          <div className="sm:col-span-4">
            <CardGoal data={goals}/>
          </div>
          <div className="sm:col-span-4">
            <CardUpcomingBill data={bills}/>
          </div>
          <div className="sm:col-span-4 sm:row-span-2">
            <CardRecentTransaction data={transactions}/>
          </div>
          <div className="sm:col-span-8">
            <CardStatistic data={expensesStatistics}/>
          </div>
          <div className="sm:col-span-8">
            <CardExpenseBeakdown data={expenses}/>
          </div>
        </div>

        <AppSnackbar
          open={snackbar.open}
          message={snackbar.message}
          severity={snackbar.severity}
          onClose={handleCloseSnackbar}
        />
      </MainLayout>
    </>
  )
}

export default dashboard