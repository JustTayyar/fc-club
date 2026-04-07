const PORTRAITS = [
  '1508344928928-7137b2fdeaca', 
  '1579952320560-15ba8050e82c',
  '1536830220616-054456ef5ef3', 
  '1551280857-2b9bbe52cfcd', 
  '1600250395178-40fe752e5189',
  '1511886929837-3e664aaef212',
  '1574629810360-7efbb9274e58',
  '1522071820081-009f0129c71c'
];

const getImg = (i: number) => `https://images.unsplash.com/photo-${PORTRAITS[i % PORTRAITS.length]}?auto=format&fit=crop&q=80&w=300&h=400`;

export const teamMembers = [
  // HEYƏT / RƏHBƏRLİK
  { id: 101, name: 'Sadiq', surname: 'Qurbanov', position: 'RƏHBƏRLİK VƏ QƏRARGAH', role: 'Klub Prezidenti', number: null, img: getImg(0) },
  { id: 102, name: 'Vaqif', surname: 'Süleymanov', position: 'RƏHBƏRLİK VƏ QƏRARGAH', role: 'Baş Məşqçi', number: null, img: getImg(1) },
  { id: 103, name: 'Fərid', surname: 'Qasımov', position: 'RƏHBƏRLİK VƏ QƏRARGAH', role: 'Köməkçi Məşqçi', number: null, img: getImg(2) },
  { id: 104, name: 'Teymur', surname: 'Zamanov', position: 'RƏHBƏRLİK VƏ QƏRARGAH', role: 'Baş Həkim', number: null, img: getImg(3) },
  { id: 105, name: 'Həsən', surname: 'Ələkbərov', position: 'RƏHBƏRLİK VƏ QƏRARGAH', role: 'Fizioterapevt', number: null, img: getImg(4) },
  
  // QAPICILAR
  { id: 1, name: 'Orxan', surname: 'Məmmədov', position: 'QAPICI', number: 1, img: getImg(5) },
  { id: 12, name: 'Elmir', surname: 'Rəhimov', position: 'QAPICI', number: 12, img: getImg(6) },
  { id: 71, name: 'Nadir', surname: 'Babayev', position: 'QAPICI', number: 71, img: getImg(7) },

  // MÜDAFİƏÇİLƏR
  { id: 3, name: 'Kamran', surname: 'Əliyev', position: 'MÜDAFİƏÇİ', number: 3, img: getImg(8) },
  { id: 4, name: 'Elnur', surname: 'Quliyev', position: 'MÜDAFİƏÇİ', number: 4, img: getImg(9) },
  { id: 5, name: 'Tahir', surname: 'Cəfərov', position: 'MÜDAFİƏÇİ', number: 5, img: getImg(10) },
  { id: 14, name: 'Ramiz', surname: 'Hüseynov', position: 'MÜDAFİƏÇİ', number: 14, img: getImg(11) },
  { id: 15, name: 'Samir', surname: 'Qarayev', position: 'MÜDAFİƏÇİ', number: 15, img: getImg(12) },
  { id: 22, name: 'Rafael', surname: 'Məhərrəmov', position: 'MÜDAFİƏÇİ', number: 22, img: getImg(13) },
  { id: 33, name: 'Ruslan', surname: 'Ağabəyov', position: 'MÜDAFİƏÇİ', number: 33, img: getImg(14) },
  { id: 44, name: 'Kərim', surname: 'Sadıqov', position: 'MÜDAFİƏÇİ', number: 44, img: getImg(15) },

  // YARIMMÜDAFİƏÇİLƏR
  { id: 6, name: 'Rəşad', surname: 'İbrahimov', position: 'YARIMMÜDAFİƏÇİ', number: 6, img: getImg(16) },
  { id: 8, name: 'Sənan', surname: 'Abbasov', position: 'YARIMMÜDAFİƏÇİ', number: 8, img: getImg(17) },
  { id: 11, name: 'Nicat', surname: 'Səfərov', position: 'YARIMMÜDAFİƏÇİ', number: 11, img: getImg(0) },
  { id: 17, name: 'Vüsal', surname: 'Kazımov', position: 'YARIMMÜDAFİƏÇİ', number: 17, img: getImg(1) },
  { id: 20, name: 'Teymur', surname: 'Daşdəmirov', position: 'YARIMMÜDAFİƏÇİ', number: 20, img: getImg(2) },
  { id: 21, name: 'Rəfael', surname: 'Vəliyev', position: 'YARIMMÜDAFİƏÇİ', number: 21, img: getImg(3) },
  { id: 77, name: 'Eşqin', surname: 'Tarverdiyev', position: 'YARIMMÜDAFİƏÇİ', number: 77, img: getImg(4) },
  { id: 88, name: 'Zahir', surname: 'Namazov', position: 'YARIMMÜDAFİƏÇİ', number: 88, img: getImg(5) },

  // HÜCUMÇULAR
  { id: 9, name: 'Ravi', surname: 'Kamalov', position: 'HÜCUMÇU', number: 9, img: getImg(6) },
  { id: 10, name: 'Tural', surname: 'Həsənov', position: 'HÜCUMÇU', number: 10, img: getImg(7) },
  { id: 19, name: 'Seymur', surname: 'Cəlilov', position: 'HÜCUMÇU', number: 19, img: getImg(8) },
  { id: 29, name: 'Aqşin', surname: 'Məhərrəmov', position: 'HÜCUMÇU', number: 29, img: getImg(9) },
  { id: 90, name: 'Vadim', surname: 'Rüstəmov', position: 'HÜCUMÇU', number: 90, img: getImg(10) },
  { id: 99, name: 'Azad', surname: 'Kərimov', position: 'HÜCUMÇU', number: 99, img: getImg(11) },
];
