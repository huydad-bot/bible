/* 찬송가 목록 — 곡 파일(songs/번호.js)을 추가하면 여기에도 한 줄 추가 */
window.SONG_LIST = [
  { n: 1,   title: '만복의 근원 하나님',   key: 'Ab', tune: 'OLD HUNDREDTH' },
  { n: 2,   title: '찬양 성부 성자 성령',   key: 'G',  tune: 'ORTONVILLE' },
  { n: 3,   title: '성부 성자와 성령',     key: 'A',  tune: 'MEINEKE' },
  { n: 4,   title: '성부 성자와 성령',     key: 'Eb', tune: 'GREATOREX' },
  { n: 5,   title: '이 천지간 만물들아',   key: 'Bb', tune: 'SESSIONS' },
  { n: 6,   title: '목소리 높여서',       key: 'D',  tune: 'ST. JOHN' },
  { n: 8,   title: '거룩 거룩 거룩 전능하신 주님', key: 'D', tune: 'NICAEA' },
  { n: 9,   title: '하늘에 가득 찬 영광의 하나님', key: 'D', tune: '구원의 하나님' },
  { n: 14,  title: '주 우리 하나님',       key: 'Fm', tune: 'YIGDAL (LEONI)' },
  { n: 15,  title: '하나님의 크신 사랑',   key: 'Bb', tune: 'BEECHER' },
  { n: 19,  title: '찬송하는 소리 있어', key: 'G',  tune: 'HARWELL' },
  { n: 50,  title: '내게 있는 모든 것을',   key: 'D',  tune: 'SURRENDER' },
  { n: 64,  title: '기뻐하며 경배하세',   key: 'G',  tune: 'HYMN TO JOY' },
  { n: 79,  title: '주 하나님 지으신 모든 세계', key: 'Bb', tune: 'O STORE GUD' },
  { n: 85,  title: '구주를 생각만 해도',  key: 'G',  tune: 'ST. AGNES' },
  { n: 86,  title: '내가 늘 의지하는 예수', key: 'G',  tune: 'THE BEST FRIEND' },
  { n: 88,  title: '내 진정 사모하는',     key: 'F',  tune: 'THE LILY OF THE VALLEY' },
  { n: 89,  title: '샤론의 꽃 예수',      key: 'D',  tune: 'GABRIEL' },
  { n: 91,  title: '슬픈 마음 있는 사람', key: 'Ab', tune: 'PRECIOUS NAME' },
  { n: 93,  title: '예수는 나의 힘이요',   key: 'Ab', tune: 'ELIZABETH' },
  { n: 94,  title: '주 예수보다 더 귀한 것은 없네', key: 'Db', tune: "I'D RATHER HAVE JESUS" },
  { n: 95,  title: '나의 기쁨 나의 소망되시며', key: 'D',  tune: 'MEDITATION' },
  { n: 176, title: '주 어느 때 다시 오실는지', key: 'Bb', tune: 'WILL JESUS FIND US WATCHING' },
  { n: 180, title: '하나님의 나팔 소리',   key: 'G',  tune: 'ROLL CALL' },
  { n: 270, title: '변찮는 주님의 사랑과', key: 'G',  tune: 'SWEET BY AND BY' },
  { n: 272, title: '고통의 멍에 벗으려고', key: 'Ab', tune: 'JESUS, I COME' },
  { n: 273, title: '나 주를 멀리 떠났다',   key: 'Ab', tune: 'COMING HOME' },
  { n: 274, title: '나 행한 것 죄뿐이니',   key: 'Ab', tune: 'A CLEAN HEART' },
  { n: 289, title: '주 예수 내 맘에 들어와', key: 'Ab', tune: 'McDANIEL' },
];

/* 곡 번호 변경(2026-11): 옛 번호 → 새 번호.
   이 브라우저에 저장된 가사·곡 설정·예약 목록을 처음 한 번만 새 번호로 옮긴다.
   번호 변경 전에 내보낸 가사 파일을 불러올 때도 이 표로 번호를 바꾼다. */
window.SONG_RENUM = {7:8, 8:9, 9:14, 10:15, 11:19, 29:50, 35:64, 39:79, 42:85, 43:86, 44:88,
  45:89, 46:91, 91:176, 92:180, 143:270, 144:272, 145:273, 146:274, 159:289};
(function(){try{
  const ls=localStorage,M=window.SONG_RENUM;if(ls.getItem('hymn_renum_v1'))return;
  const put={};
  Object.keys(M).forEach(o=>{
    [['hymn'+o+'_lyrics','hymn'+M[o]+'_lyrics'],['hymn_cfg_'+o,'hymn_cfg_'+M[o]]].forEach(([a,b])=>{
      const v=ls.getItem(a);if(v!==null){put[b]=v;ls.removeItem(a);}});
  });
  Object.keys(put).forEach(k=>ls.setItem(k,put[k]));        // 모두 지운 뒤에 써야 7→8, 8→9 처럼 이어진 번호가 섞이지 않음
  const pl=JSON.parse(ls.getItem('hymn_playlist')||'null');
  if(Array.isArray(pl))ls.setItem('hymn_playlist',JSON.stringify(pl.map(n=>String(M[n]||n))));
  ls.setItem('hymn_renum_v1','1');
}catch(e){}})();
