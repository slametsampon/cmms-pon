import WoSummaryTable from '@/components/cmms/workOrder/woSummaryTable';
import { useEffect, useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        workOrders: action.payload,
        error: '',
      };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };

    default:
      state;
  }
}

export default function Home() {
  const [{ loading, error, workOrders }, dispatch] = useReducer(reducer, {
    loading: true,
    workOrders: [],
    error: '',
  });

  useEffect(() => {
    (async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const results = await fetch('/api/cmms/workOrders');
        const resultsJson = await results.json();
        dispatch({ type: 'FETCH_SUCCESS', payload: resultsJson });
      } catch (error) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    })();
  }, []);

  return (
    <main className="mb-3 mt-3 w-full rounded-2xl bg-slate-50 p-3 text-lg font-bold shadow-xl dark:bg-gray-900">
      <h1 className="px-6">CMMS - PON</h1>
      {!workOrders ? (
        <div>Loading...</div>
      ) : (
        <WoSummaryTable workOrders={workOrders}></WoSummaryTable>
      )}
    </main>
  );
}
