import WorkOrder from 'models/WorkOrder';
import db from 'utils/db';

const handler = async (req, res) => {
  if (req.method === 'GET') {
    return getHandler(req, res);
  } else if (req.method === 'POST') {
    return postHandler(req, res);
  } else {
    return res.status(400).send({ message: 'Method not allowed' });
  }
};

const postHandler = async (req, res) => {
  console.log(req, res);
};

const getHandler = async (req, res) => {
  db.connect();
  const workOrders = await WorkOrder.find();
  db.disconnect();
  res.status(200).send(workOrders);
};

export default handler;
