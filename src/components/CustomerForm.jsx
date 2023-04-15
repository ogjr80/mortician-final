import { useState } from 'react';

const CustomerForm = ({ onSubmit, initialValues }) => {
  const [firstName, setFirstName] = useState(initialValues?.firstName || '');
  const [lastName, setLastName] = useState(initialValues?.lastName || '');
  const [email, setEmail] = useState(initialValues?.email || '');
  const [phone, setPhone] = useState(initialValues?.phone || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ firstName, lastName, email, phone });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="firstName" className="block text-sm font-medium">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="mt-1 w-full px-2 py-1 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label htmlFor="lastName" className="block text-sm font-medium">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="mt-1 w-full px-2 py-1 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full px-2 py-1 border border-gray-300 rounded"
          />
          </div>
          <div>
          <label htmlFor="phone" className="block text-sm font-medium">
          Phone
          </label>
          <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-1 w-full px-2 py-1 border border-gray-300 rounded"
          />
          </div>
          <button
               type="submit"
               className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded"
             >
          {initialValues ? 'Update' : 'Add'} Customer
          </button>
          </form>
          );
          };
          
          export default CustomerForm;
