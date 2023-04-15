import CustomerList from '../components/CustomerList';
import { useState } from 'react';
import {Link} from 'react-router-dom'; 

const CustomerPage = () => {
  const [customers, setCustomers] = useState([]);
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Customers</h2>
      <CustomerList onCustomersChange={setCustomers} />
      <div className="mt-4">
        {/* <Link
          to={{ pathname: '/dead-bodies', state: { customers } }}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Manage Dead Bodies
        </Link> */}
      </div>
    </div>
  );
};

export default CustomerPage;

