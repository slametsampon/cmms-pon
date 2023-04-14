import bcrypt from 'bcryptjs';
const data = {
  jobTickets: [
    {
      id: 1,
      tagnumber: 'Any',
      title: 'Overhaul C/V valtex ex-psa',
      priority: 'Normal',
      location: 'Workshop',
      status: 'Inprogress',
      ref: 'Programm Restorasi',
      executor: ['BAS', 'AMY', 'SHD'],
      detailTask: [
        '1. Pastikan mengikuti IK',
        '2. Posisikan di workbench',
        '3. Bersihkan filter regulator',
        '4. Gunakan current injector 4-20 mA',
        '5. Hati-hati tekanan spring pada piston',
        '6. Catat semua dimensi',
        '7. Catat hasil stroke check',
      ],
      detailSHE: [
        '1. Gunakan APD standart',
        '2. Gunakan safety google',
        '3. Bersih dan rapi setelah selesai',
      ],
      scheduleDate: '07/04/2023',
      finishDate: '',
    },
    {
      id: 2,
      tagnumber: 'FT-1235',
      title: 'Kalibrasi',
      priority: 'Emergency',
      location: 'Octanol lantai 2',
      status: 'Inprogress',
      ref: 'PROD_0001',
      executor: ['ADO', 'AMY', 'AMH'],
      detailTask: [
        '1. Pastikan mengikuti IK',
        '2. Periksa tidak ada kebocoran pada tubing/sambungan',
        '3. Pastikan flow control dibuat manual',
        '4. Gunakan current injector 4-20 mA',
        '5. Inject perlahan dari 4 mA sampai 20 mA',
        '6. Catat semua indikasi lokal dan DCS',
        '7. Bandingkan dengan data konfigurasi',
        '8. Hitung koreksi meter factor dan ulangi langkah 5 - 8',
      ],
      detailSHE: [
        '1. Gunakan APD standart',
        '2. Gunakan safety google',
        '3. Bersih dan rapi setelah selesai',
      ],
      scheduleDate: '07/04/2023',
      finishDate: '',
    },
    {
      id: 3,
      tagnumber: 'E-165I',
      title: 'Re-bearing ',
      priority: 'Urgent',
      location: 'Octanol lantai 3',
      status: 'Selesai',
      ref: 'Program PM',
      executor: ['AMH', 'AMY', 'SHD'],
      detailTask: [
        '1. Pastikan mengikuti IK',
        '2. Pastikan power telah di-lock',
        '3. Lepas kabel power',
        '4. Lepas belt',
        '5. Turunkan motor pada platform',
        '6. Bongkar cover motor',
        '7. Ukur dimensi ID, OD dan catat dan bandingkan dg standart',
        '8. Gunakan heater - hindari pukulan pada bearing saat pasang',
        '9. Bersihkan stator dan berikan pelapis insulation',
      ],
      detailSHE: [
        '1. Gunakan APD standart',
        '2. Gunakan safety google',
        '3. Bersih dan rapi setelah selesai',
      ],
      scheduleDate: '07/04/2023',
      finishDate: '',
    },
  ],
  workOrders: [
    {
      id: 1,
      woNumber: 'PROD_0001',
      tagnumber: 'FT-1235',
      problem: 'Deviation from mass balance more than 5 %',
      dateOpen: '2020-09-21',
      statusId: 16,
      destSectionId: 3,
      originatorId: 9,
      currentUserId: 8,
      executorId: null,
      dateFinish: null,
      priorityId: 2,
    },
    {
      id: 2,
      woNumber: 'MNTC_0002',
      tagnumber: 'FT-1405',
      problem: 'Leakages on flanges',
      dateOpen: '2020-09-21',
      statusId: 2,
      destSectionId: 2,
      originatorId: 7,
      currentUserId: 8,
      executorId: null,
      dateFinish: null,
      priorityId: 1,
    },
    {
      id: 3,
      woNumber: 'PROD_0003',
      tagnumber: 'FT-1235',
      problem: 'Need to be checked due fluctuation',
      dateOpen: '2020-09-22',
      statusId: 1,
      destSectionId: 3,
      originatorId: 9,
      currentUserId: 9,
      executorId: null,
      dateFinish: null,
      priorityId: 1,
    },
    {
      id: 4,
      woNumber: 'PROD_0004',
      tagnumber: 'FT-1234',
      problem: 'Testing',
      dateOpen: '2020-09-22',
      statusId: 10,
      destSectionId: 2,
      originatorId: 9,
      currentUserId: 6,
      executorId: null,
      dateFinish: null,
      priorityId: 1,
    },
    {
      id: 5,
      woNumber: 'PROD_0005',
      tagnumber: 'FT-1405',
      problem: 'look strange indication',
      dateOpen: '2020-09-22',
      statusId: 1,
      destSectionId: 3,
      originatorId: 9,
      currentUserId: 9,
      executorId: null,
      dateFinish: null,
      priorityId: 1,
    },
  ],
  sectionsResp: [
    {
      id: 1,
      name: 'All Production',
      description: 'All production sections',
      departmentId: 2,
    },
    {
      id: 2,
      name: 'Mechanical',
      description:
        'Part of Maintenance for mechanical equipments (static and rotating)',
      departmentId: 3,
    },
    {
      id: 3,
      name: 'Electrical & Instrumentation',
      description:
        'Part of Maintenance for electrical, instrumentation and control',
      departmentId: 3,
    },
    {
      id: 4,
      name: 'QCA',
      description: 'Part of QCAS for QA and QC',
      departmentId: 4,
    },
    {
      id: 5,
      name: 'Safety',
      description: 'Part of QCAS for safety',
      departmentId: 4,
    },
    { id: 6, name: 'HRDGA', description: 'HRDGA', departmentId: 5 },
    { id: 7, name: 'Purchasing', description: 'Purchasing', departmentId: 1 },
    { id: 8, name: 'Marketing', description: 'Marketing', departmentId: 1 },
    { id: 9, name: 'Off Site', description: 'Off Site', departmentId: 1 },
    {
      id: 10,
      name: 'Dept. Head Production',
      description: 'Dept. Head Production',
      departmentId: 2,
    },
    {
      id: 11,
      name: 'Dept. Head Maintenance',
      description: 'Dept. Head Maintenance',
      departmentId: 3,
    },
  ],
  actions: [
    { id: 1, name: 'Close', description: 'Has been completed', mode_id: 2 },
    { id: 2, name: 'Open', description: 'Just opening', mode_id: 1 },
    { id: 3, name: 'Revise', description: 'Need to be revised', mode_id: 2 },
    { id: 4, name: 'Check', description: 'Has been checked', mode_id: 1 },
    {
      id: 5,
      name: 'Re-check',
      description: 'Need to be re-checked',
      mode_id: 2,
    },
    { id: 6, name: 'Approve', description: 'Approved', mode_id: 1 },
    {
      id: 7,
      name: 'Reject',
      description: 'Rejected due to any reasons',
      mode_id: 2,
    },
    { id: 8, name: 'Review', description: 'Reviewed', mode_id: 1 },
    { id: 9, name: 'Need shutdown', description: 'Need shutdown', mode_id: 3 },
    {
      id: 10,
      name: 'Need materials',
      description: 'Need materials',
      mode_id: 3,
    },
    { id: 11, name: 'Need MOC', description: 'Need MOC', mode_id: 3 },
    {
      id: 12,
      name: 'Need Regulations',
      description: 'Need Regulations',
      mode_id: 3,
    },
    { id: 13, name: 'Schedule', description: 'Scheduled', mode_id: 1 },
    {
      id: 14,
      name: 'Return',
      description: 'Returned due to any reasons',
      mode_id: 2,
    },
    { id: 15, name: 'Complete', description: 'Order completed', mode_id: 2 },
    {
      id: 16,
      name: 'Execute',
      description: 'Put on executed board',
      mode_id: 1,
    },
    { id: 17, name: 'Finish', description: 'Just finishing', mode_id: 2 },
    { id: 18, name: 'In progress', description: 'In progress', mode_id: 3 },
    {
      id: 19,
      name: 'Cancel',
      description: 'Canceled during execution',
      mode_id: 2,
    },
  ],
  users: [
    {
      id: 2,
      name: 'expUser',
      email: 'exp2@example.com',
      password: bcrypt.hashSync('123456'),
      isActive: 1,
      isAdmin: 0,
      reverseUser: 0,
      forwardUser: 0,
      sectionId: 0,
      level: 0,
    },
    {
      id: 3,
      name: 'sptdOrg',
      email: 'ekoSulistiyo@exmp.com',
      password: bcrypt.hashSync('123456'),
      isActive: 0,
      isAdmin: 0,
      reverseUser: 9,
      forwardUser: 4,
      sectionId: 1,
      level: 0,
    },
    {
      id: 4,
      name: 'mgrOrg',
      email: 'email4@example.com',
      password: bcrypt.hashSync('123456'),
      isActive: 0,
      isAdmin: 0,
      reverseUser: 3,
      forwardUser: 5,
      sectionId: 10,
      level: 0,
    },
    {
      id: 5,
      name: 'mgrExe',
      email: 'email5@example.com',
      password: bcrypt.hashSync('123456'),
      isActive: 0,
      isAdmin: 0,
      reverseUser: 4,
      forwardUser: 6,
      sectionId: 11,
      level: 0,
    },
    {
      id: 6,
      name: 'sptdExe',
      email: 'email6@example.com',
      password: bcrypt.hashSync('123456'),
      isActive: 0,
      isAdmin: 0,
      reverseUser: 5,
      forwardUser: 7,
      sectionId: 3,
      level: 0,
    },
    {
      id: 7,
      name: 'spvExe',
      email: 'email7@example.com',
      password: bcrypt.hashSync('123456'),
      isActive: 0,
      isAdmin: 0,
      reverseUser: 6,
      forwardUser: 8,
      sectionId: 3,
      level: 0,
    },
    {
      id: 8,
      name: 'frmExe',
      email: 'email8@example.com',
      password: bcrypt.hashSync('123456'),
      isActive: 0,
      isAdmin: 0,
      reverseUser: 7,
      forwardUser: 8,
      sectionId: 3,
      level: 0,
    },
    {
      id: 9,
      name: 'spvOrg',
      email: 'abiNubli@example.com',
      password: bcrypt.hashSync('123456'),
      isActive: 0,
      isAdmin: 0,
      reverseUser: 9,
      forwardUser: 3,
      sectionId: 1,
      level: 0,
    },
    {
      id: 10,
      name: 'sampon',
      email: 'slamet@pon.co.id',
      password: bcrypt.hashSync('123456'),
      isActive: 0,
      isAdmin: 0,
      reverseUser: null,
      forwardUser: null,
      sectionId: null,
      level: 0,
    },
    {
      id: 11,
      name: 'SptdOrg',
      email: 'email11@example.com',
      password: bcrypt.hashSync('123456'),
      isActive: 0,
      isAdmin: 0,
      reverseUser: null,
      forwardUser: null,
      sectionId: null,
      level: 0,
    },
    {
      id: 12,
      name: 'admin',
      email: 'admin12@example.com',
      password: bcrypt.hashSync('123456'),
      reverseUser: null,
      forwardUser: null,
      sectionId: null,
      level: 0,
    },
  ],
  depts: [
    {
      id: 1,
      name: 'Marketing & Off Site',
      description: 'Marketing & Off Site',
      initial: 'MKOS',
    },
    { id: 2, name: 'Production', description: 'Production', initial: 'PROD' },
    { id: 3, name: 'Maintenance', description: 'Maintenance', initial: 'MNTC' },
    {
      id: 4,
      name: 'QCA & Safety',
      description: 'QCA & Safety',
      initial: 'QCAS',
    },
    { id: 5, name: 'HRDGA', description: 'HRDGA', initial: 'HRGA' },
  ],
  priorities: [
    { id: 1, name: 'Normal', description: 'Normal' },
    { id: 2, name: 'Emergency', description: 'Emergency' },
    { id: 3, name: 'Shutdown', description: 'Shutdown' },
    { id: 4, name: 'Urgent', description: 'Urgent' },
    { id: 5, name: 'Logshet', description: 'Logshet' },
    { id: 6, name: 'Other', description: 'Other' },
  ],
};
export default data;
