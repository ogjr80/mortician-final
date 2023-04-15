

import { useState } from 'react';
import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import CustomerForm from './CustomerForm';
import DeadBodyList from './DeadBodyList';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  // Fetch customers from Firestore
  onSnapshot(collection(db, 'customers'), (snapshot) => {
    const customersData = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setCustomers(customersData);
  });

  const handleAddOrUpdateCustomer = async (customer) => {
    if (selectedCustomer) {
      // Update existing customer
      await updateDoc(doc(db, 'customers', selectedCustomer.id), customer);
      setSelectedCustomer(null);
    } else {
      // Add new customer
      await addDoc(collection(db, 'customers'), customer);
    }
  };

  const handleDeleteCustomer = async (id) => {
    await deleteDoc(doc(db, 'customers', id));
  };

  return (
    <div className="container mx-auto mt-8">
      <CustomerForm onSubmit={handleAddOrUpdateCustomer} initialValues={selectedCustomer} />
      <div className="mt-8">
        <ul>
          {customers.map((customer) => (
            <li key={customer.id} className="flex items-center justify-between space-x-4">
              <div>
                {customer.firstName} {customer.lastName} - {customer.email} - {customer.phone}
              </div>
              <div>
                <button
                  onClick={() => setSelectedCustomer(customer)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteCustomer(customer.id)}
                  className="ml-2 bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <DeadBodyList customers={customers} />
    </div>
  );
};

export default CustomerList;
