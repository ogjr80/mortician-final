

import { useState } from 'react';
import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import CustomerForm from './CustomerForm';
import DeadBodyList from './DeadBodyList';
import {useCustomers} from '../contexts/CustomerContext'; 
import {toast} from 'react-hot-toast'; 

const CustomerList = () => {
  const { customers, setCustomers} = useCustomers(); 
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  // Fetch customers from Firestore
  onSnapshot(collection(db, 'customers'), (snapshot) => {
    const customersData = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setCustomers(customersData);
  });

  const handleAddOrUpdateCustomer = async (customer) => {
    try { 
    if (selectedCustomer) {
      // Update existing customer
      await updateDoc(doc(db, 'customers', selectedCustomer.id), customer);
      setSelectedCustomer(null);
      toast.success('Customer updated successfully');
    } else {
      // Add new customer
      await addDoc(collection(db, 'customers'), customer);
      toast.success('Customer added successfully');
    }

  } 
  catch(error) {
    toast.error('Failed to save customer'); 
  }
  };

  const handleDeleteCustomer = async (id) => {
    try { 
      await deleteDoc(doc(db, 'customers', id));
      toast.success('Customer deleted successfully'); 
    }
    catch(error){
      toast.error('Failed to delete customer'); 
    }
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

          {/* <DeadBodyList customers={customers}/> */}
    </div>
  );
};

export default CustomerList;
