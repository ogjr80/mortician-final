import { useState } from 'react';
import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import DeadBodyForm from './DeadBodyForm';
import {toast} from 'react-hot-toast'; 


const DeadBodyList = ({ customers }) => {
  const [deadBodies, setDeadBodies] = useState([]);
  const [selectedDeadBody, setSelectedDeadBody] = useState(null);

  // Fetch dead bodies from Firestore
  onSnapshot(collection(db, 'deadBodies'), (snapshot) => {
    const deadBodiesData = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setDeadBodies(deadBodiesData);
  });

  const handleAddOrUpdateDeadBody = async (deadBody) => {
    try { 
      if (selectedDeadBody) {
                  // Update existing dead body
            await updateDoc(doc(db, 'deadBodies', selectedDeadBody.id), deadBody);
            setSelectedDeadBody(null);
            toast.success('Dead body updated successfully'); 
            } else {
            // Add new dead body
            await addDoc(collection(db, 'deadBodies'), deadBody);
            toast.success('Dead body added successfully')
            }
    } 
    catch (error){
      toast.error('Failed to save dead body'); 
    }
    };

const handleDeleteDeadBody = async (id) => {
  try { 
    await deleteDoc(doc(db, 'deadBodies', id));
    toast.success('Dead body deleted successfully'); 
  } catch (error){
    toast.error('Failed to delete Dead Body successfully'); 
  }

};

const getCustomerName = (customerId) => {
const customer = customers.find((c) => c.id === customerId);
return customer ? `${customer.firstName} ${customer.lastName}` : 'N/A';
};


return (
<div className="container mx-auto mt-8">
<DeadBodyForm
     onSubmit={handleAddOrUpdateDeadBody}
     initialValues={selectedDeadBody}
     customers={customers}
   />
<div className="mt-8">
<ul>
{deadBodies.map((deadBody) => (
<li key={deadBody.id} className="flex items-center justify-between space-x-4">
<div>
{deadBody.name} - {getCustomerName(deadBody.customerId)} - {deadBody.depositDate}
</div>
<div>
<button
onClick={() => setSelectedDeadBody(deadBody)}
className="bg-yellow-500 text-white px-2 py-1 rounded"
>
Edit
</button>
<button
onClick={() => handleDeleteDeadBody(deadBody.id)}
className="ml-2 bg-red-500 text-white px-2 py-1 rounded"
>
Delete
</button>
</div>
</li>
))}
</ul>
</div>
</div>
);
};

export default DeadBodyList;
