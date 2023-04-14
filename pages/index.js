import WoSummaryTable from '@/components/cmms/workOrder/woSummaryTable';
import axios from 'axios';
import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [workOrders, setWorkOrders] = useState([]);

  useEffect(() => {
    (async () => {
      //const results = await axios.get('/api/cmms/workOrders');
      const results = await fetch('/api/cmms/workOrders');
      const resultsJson = await results.json();
      setWorkOrders(resultsJson);
    })();
  }, []);

  return (
    <main className="mb-3 mt-3 w-full rounded-2xl bg-slate-50 p-3 text-lg font-bold shadow-xl dark:bg-gray-900">
      <h1>CMMS - PON</h1>
      {!workOrders ? (
        <div>Loading...</div>
      ) : (
        <WoSummaryTable workOrders={workOrders}></WoSummaryTable>
      )}
    </main>
  );
}
