import { connectFirestoreEmulator } from 'firebase/firestore';
import DeadBodyList from '../components/DeadBodyList';
import { useLocation } from 'react-router-dom';
import { useCustomers } from '../contexts/CustomerContext';


const DeadBodyPage = () => {
  // const location = useLocation(); 
  // const customers = location.state?.customers || []; 
  const {customers} = useCustomers(); 
  console.log(customers); 
  
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Dead Bodies</h2>
      <DeadBodyList customers={customers} />
    </div>
  );
};

export default DeadBodyPage;
