import { useState } from 'react';

const DeadBodyForm = ({ onSubmit, initialValues, customers }) => {
  const [name, setName] = useState(initialValues?.name || '');
  const [customerId, setCustomerId] = useState(initialValues?.customerId || '');
  const [depositDate, setDepositDate] = useState(initialValues?.depositDate || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, customerId, depositDate });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full px-2 py-1 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label htmlFor="customerId" className="block text-sm font-medium">
          Customer
        </label>
        <select
          id="customerId"
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)}
          className="mt-1 w-full px-2 py-1 border border-gray-300 rounded"
        >
          <option value="">Select a customer</option>
          {customers.map((customer) => (
            <option key={customer.id} value={customer.id}>
              {customer.firstName} {customer.lastName}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="depositDate" className="block text-sm font-medium">
          Deposit Date
        </label>
        <input
          type="date"
          id="depositDate"
          value={depositDate}
          onChange={(e) => setDepositDate(e.target.value)}
          className="mt-1 w-full px-2 py-1 border border-gray-300 rounded"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded"
      >
        {initialValues ? 'Update' : 'Add'} Dead Body
      </button>
    </form>
  );
};

export default DeadBodyForm;
