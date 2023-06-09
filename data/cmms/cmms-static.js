const cmmsStatic = {
  generalTaskMech: ['1. Sedapat mungkin release pressure', '2. ', '3. ', '4. '],
  generalHSE: ['1. Gunakan APD', '2. ', '3. ', '4. '],
  levels: [
    { id: 0, name: 'Select...', description: 'Select Level' },
    { id: 1, name: 'FRM', description: 'Foreman' },
    { id: 2, name: 'ENG', description: 'Engineer' },
    { id: 3, name: 'SPV', description: 'Supervisor' },
    { id: 4, name: 'SPD', description: 'Superintendent' },
    { id: 5, name: 'MGR', description: 'Manager' },
  ],
  departments: [
    { id: 0, name: 'Select...', description: 'Select Dept', initial: 'SLC' },
    { id: 900, name: 'Experiment', description: 'Experiment', initial: 'EXP' },
    { id: 10, name: 'Sales & Supply Chain', description: 'Sales & Supply Chain', initial: 'SSC' },
    { id: 30, name: 'Production', description: 'Production', initial: 'PROD' },
    { id: 50, name: 'Maintenance', description: 'Maintenance', initial: 'MNTC' },
    { id: 40, name: 'QCA & Safety', description: 'QCA & Safety', initial: 'QCAS' },
    { id: 20, name: 'HRDGA', description: 'HRDGA', initial: 'HRGA' },
    { id: 60, name: 'Finance & Accounting', description: 'Finance & Accounting', initial: 'FIN' },
    { id: 70, name: 'Corporate & Secretary', description: 'Corporate & Secretary', initial: 'COR' },
    { id: 80, name: 'Internal Audit', description: 'Internal Audit', initial: 'DIA' },
  ],
  sections: [
    { id: 0, name: 'Select...', description: 'Select Section...', departmentId: 0 },
    {
      id: 900,
      name: 'EXP',
      description: 'Experiment',
      departmentId: 900,
    },
    { id: 31, name: 'PROD', description: 'All production sections', departmentId: 30 },
    {
      id: 51,
      name: 'MECH',
      description: 'Mechanical Section',
      departmentId: 50,
    },
    {
      id: 52,
      name: 'ELINS',
      description: 'Electrical & instrumentation section',
      departmentId: 50,
    },
    {
      id: 53,
      name: 'WSCR',
      description: 'Workshop & Construction',
      departmentId: 50,
    },
    {
      id: 54,
      name: 'REAL',
      description: 'Realibility',
      departmentId: 50,
    },
    { id: 41, name: 'QCA', description: 'Quality Control & Assurance', departmentId: 40 },
    { id: 42, name: 'SHE', description: 'Safety & Healt', departmentId: 40 },
    { id: 21, name: 'HRD', description: 'Human Resources', departmentId: 20 },
    { id: 22, name: 'GA', description: 'General Affair', departmentId: 20 },
    { id: 11, name: 'PROC', description: 'Procurement', departmentId: 10 },
    { id: 12, name: 'SALE', description: 'Sales', departmentId: 10 },
    { id: 13, name: 'WHR', description: 'Warehouse', departmentId: 10 },
    {
      id: 31,
      name: 'PROD',
      description: 'Field Production',
      departmentId: 30,
    },
    {
      id: 10,
      name: 'SSC',
      description: 'Dept. Head SSC',
      departmentId: 10,
    },
    {
      id: 20,
      name: 'HRGA',
      description: 'Dept. Head HRGA',
      departmentId: 20,
    },
    {
      id: 30,
      name: 'PROD',
      description: 'Dept. Head Production',
      departmentId: 30,
    },
    {
      id: 40,
      name: 'QCAS',
      description: 'Dept. Head QCAS',
      departmentId: 40,
    },
    {
      id: 50,
      name: 'MNTC',
      description: 'Dept. Head Maintenance',
      departmentId: 50,
    },
    {
      id: 60,
      name: 'FINA',
      description: 'Dept. Head Finance & Accounting',
      departmentId: 60,
    },
    {
      id: 70,
      name: 'CORSEC',
      description: 'Dept. Head Corporate & Secretary',
      departmentId: 70,
    },
    {
      id: 80,
      name: 'INA',
      description: 'Dept. Head Internal Audit',
      departmentId: 3,
    },
  ],
  statuses: [
    { id: 0, name: 'Select...', description: 'Select status', modeId: 2 },
    { id: 1, name: 'Close', description: 'Has been completed', modeId: 2 },
    { id: 2, name: 'Open', description: 'Just opening', modeId: 1 },
    { id: 3, name: 'Approve', description: 'Approved', modeId: 1 },
    { id: 4, name: 'Reject', description: 'Rejected due to any reasons', modeId: 2 },
    { id: 5, name: 'Cancel', description: 'Canceled during execution', modeId: 2 },
    { id: 6, name: 'Complete', description: 'Complete', modeId: 1 },
    { id: 7, name: 'NeedShutdown', description: 'Need shutdown', modeId: 3 },
    { id: 8, name: 'NeedMaterials', description: 'Need materials', modeId: 3 },
    { id: 9, name: 'NeedMOC', description: 'Need MOC', modeId: 3 },
    { id: 10, name: 'NeedRegulations', description: 'Need Regulations', modeId: 3 },
    { id: 11, name: 'Schedule', description: 'Scheduled', modeId: 1 },
    { id: 12, name: 'Inprogress', description: 'In progress', modeId: 3 },
    { id: 13, name: 'Finish', description: 'Just finishing', modeId: 2 },
    { id: 14, name: 'ReadyToSchedule', description: 'Ready to schedule', modeId: 2 },
    { id: 15, name: 'RequestToOpen', description: 'Request to Open', modeId: 2 },
    { id: 16, name: 'ReadyToComplete', description: 'Request to Open', modeId: 2 },
  ],
  priorities: [
    { id: 0, name: 'Select...', description: 'Select' },
    { id: 1, name: 'Emergency', description: 'Emergency' },
    { id: 2, name: 'Urgent', description: 'Urgent' },
    { id: 3, name: 'Normal', description: 'Normal' },
    { id: 4, name: 'Shutdown', description: 'Shutdown' },
    { id: 5, name: 'Other', description: 'Other' },
  ],
  swpType: [
    { id: 0, name: 'Select...', description: 'Select SWP' },
    { id: 1, name: 'CWP', description: 'Cold Work Permit' },
    { id: 2, name: 'HWP', description: 'HOT Work Permit' },
    { id: 3, name: 'COP', description: 'Contractor Work Permit' },
    { id: 4, name: 'EWP', description: 'Excavation Work Permit' },
    { id: 5, name: 'CSP', description: 'Convince Work Permit' },
  ],
}
export default cmmsStatic
