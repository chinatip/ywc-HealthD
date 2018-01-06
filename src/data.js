export const MISSIONS = {
  "01": {
    name: 'ดื่มน้ำมะเขือเทศ',
    detail: '(3 แก้ว/สัปดาห์)',
    score: 200
  }, 
  "02": {
    name: 'เดินขึ้น-ลงบันได',
    detail: '(1 ชั้น/วัน จำนวน 4 วัน/สัปดาห์)',
    score: 200
  },
  "03": {
    name: 'ห้า ห้า ห้า ยิ้มถ่ายรูปฮาๆ กับ 5 คนใกล้ตัว',
    detail: '(3 รูป/สัปดาห์)',
    score: 200
  }
};

export const USERS = {
  "01": {
    name: 'สุดสุด',
    lastname: 'ขยันยิ่ง',
    phoneNumber: '',
    email: '',
    age: '42',
    weight: 65,
    height: 170,
    registerDate: '',
    updateDate: '',
    score: 400,
    missions: [MISSIONS["01"]]
  },
  "02": {
    name: 'B',
    lastname: '',
    phoneNumber: '',
    email: '',
    age: '',
    weight: 0,
    height: 0,
    registerDate: '',
    updateDate: '',
    score: 3
  },
};
