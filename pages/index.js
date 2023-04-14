import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [workOrders, setWorkOrders] = useState([]);

  useEffect(() => {
    (async () => {
      const results = await fetch('/api/cmms/workOrders');
      const resultsJson = await results.json();
      setWorkOrders(resultsJson);
    })();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <h1>CMMS - PON</h1>
      {!workOrders ? (
        <div>Loading...</div>
      ) : (
        workOrders.map((workOrder) => (
          <div className="card" key={workOrder.woNumber}>
            <h2>{workOrder.woNumber}</h2>
            <p>{workOrder.problem}</p>
          </div>
        ))
      )}
    </main>
  );
}
