// App.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // Input state variables
  const [income, setIncome] = useState('');
  const [rent, setRent] = useState('');
  const [food, setFood] = useState('');
  const [transport, setTransport] = useState('');
  const [other, setOther] = useState('');

  // Result state variable
  const [balance, setBalance] = useState(null);

  // Calculation function
  const handleCalculate = () => {
    // Input validation
    if (
      income === '' || rent === '' || food === '' || transport === '' || other === '' ||
      parseFloat(income) < 0 || parseFloat(rent) < 0 || parseFloat(food) < 0 ||
      parseFloat(transport) < 0 || parseFloat(other) < 0
    ) {
      alert("Please enter positive values in all fields!");
      return;
    }

    // Calculate remaining balance
    const remainingBalance = parseFloat(income) - (parseFloat(rent) + parseFloat(food) + parseFloat(transport) + parseFloat(other));
    setBalance(remainingBalance);
  };

  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ width: '50%' }}>
        <div className="card-body text-center">
          <h2 className="text-primary mb-4">Budget Calculator</h2>

          {/* Inputs */}
          <div className="mb-3">
            <label className="form-label">Monthly Income (₹)</label>
            <input
              type="number"
              className="form-control"
              placeholder="Income"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Rent/EMI (₹)</label>
            <input
              type="number"
              className="form-control"
              placeholder="Rent/EMI"
              value={rent}
              onChange={(e) => setRent(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Food Expenses (₹)</label>
            <input
              type="number"
              className="form-control"
              placeholder="Food"
              value={food}
              onChange={(e) => setFood(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Transport Expenses (₹)</label>
            <input
              type="number"
              className="form-control"
              placeholder="Transport"
              value={transport}
              onChange={(e) => setTransport(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Other Expenses (₹)</label>
            <input
              type="number"
              className="form-control"
              placeholder="Other"
              value={other}
              onChange={(e) => setOther(e.target.value)}
            />
          </div>

          {/* Button */}
          <div className="text-center mb-3">
            <button className="btn btn-primary" type="button" onClick={handleCalculate}>
              Calculate Balance
            </button>
          </div>

          {/* Result */}
          {balance !== null && (
            <div className="mt-3">
              {balance < 0 ? (
                <h5 style={{ color: 'red' }}>Balance: ₹ {balance.toFixed(2)} – You are overspending!</h5>
              ) : (
                <h5 style={{ color: 'green' }}>Balance: ₹ {balance.toFixed(2)} – Good job managing your expenses!</h5>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
