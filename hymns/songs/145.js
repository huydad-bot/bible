/* 찬송가 145장 — 나 주를 멀리 떠났다 (회개와 용서) */
registerSong({
  n: 145,
  title: '나 주를 멀리 떠났다',
  tune: 'COMING HOME',
  composer: 'W. J. Kirkpatrick',
  year: 1892,
  key: 'Ab',
  meter: '4/4',
  pickup: 1,
  tempo: 80,
  tempoText: '보통으로',
  verses: 5,
  refrainAt: 32,
  // 절 끝 마디가 3박(못갖춘마디 보충), 후렴은 온마디로 시작 → 마디선 직접 지정
  bars: [1, 5, 9, 13, 17, 21, 25, 29, 32, 36, 40, 44, 48, 52, 56, 60],
  lineBreaks: [16, 32, 48],
  melisma: [5.5, 21.5, 52.5],      // '떠'·'시'·'받' (F→A♭ 슬러)
  intro: { fl: [[0, 32]], l4: [[48, 63]] },   // 악보의 ┌ ┐ 전주 표시 = 절 전체
  chords: {1:'Ab',5:'Db',7:'Ab',13:'Eb',17:'Ab',21:'Db',23:'Ab',25:'Fm',27:'Eb7',29:'Ab',
           32:'Ab',36:'Db',40:'Ab',44:'Eb',48:'Ab',52:'Db',54:'Ab',56:'Fm',58:'Eb7',60:'Ab'},

  S:`Eb4:1
 C5:1.5 C5:.5 Ab4:1.5 Ab4:.5 | F4:.5 Ab4:1 F4:.5 Eb4:2 | Ab4:1 Ab4:1 C5:.5 C5:1.5 | Bb4:3 Eb4:1
 C5:1.5 C5:.5 Ab4:1.5 Ab4:.5 | F4:.5 Ab4:1 F4:.5 Eb4:2 | Ab4:1 Ab4:1 Bb4:.5 Bb4:1.5 | Ab4:2 r:1
 C5:.5 C5:1.5 Ab4:2 | Ab4:.5 Ab4:1.5 F4:2 | Eb4:1 C5:1 C5:1 Ab4:1 | Bb4:3 r:1
 C5:1.5 C5:.5 Ab4:1.5 Ab4:.5 | F4:.5 Ab4:1 F4:.5 Eb4:2 | Ab4:1 Ab4:1 Bb4:.5 Bb4:1.5 | Ab4:3`,

  A:`C4:1
 Eb4:1.5 Eb4:.5 C4:1.5 C4:.5 | Db4:.5 F4:1 Db4:.5 C4:2 | C4:1 C4:1 Eb4:.5 Eb4:1.5 | Eb4:3 C4:1
 Eb4:1.5 Eb4:.5 C4:1.5 C4:.5 | Db4:.5 F4:1 Db4:.5 C4:2 | C4:1 C4:1 Db4:.5 Db4:1.5 | C4:2 r:1
 Eb4:.5 Eb4:1.5 C4:2 | F4:.5 F4:1.5 Db4:2 | C4:1 Eb4:1 Eb4:1 Eb4:1 | Eb4:3 r:1
 Eb4:1.5 Eb4:.5 C4:1.5 C4:.5 | Db4:.5 F4:1 Db4:.5 C4:2 | C4:1 C4:1 Db4:.5 Db4:1.5 | C4:3`,

  T:`Ab3:1
 Ab3:1.5 Ab3:.5 Eb3:1.5 Ab3:.5 | Ab3:1.5 Ab3:.5 Ab3:2 | Eb3:1 Eb3:1 Ab3:.5 Ab3:1.5 | G3:3 Ab3:1
 Ab3:1.5 Ab3:.5 Eb3:1.5 Ab3:.5 | Ab3:1.5 Ab3:.5 Ab3:2 | Ab3:1 Ab3:1 G3:.5 G3:1.5 | Ab3:2 r:1
 Ab3:.5 Ab3:1.5 Ab3:2 | Ab3:.5 Ab3:1.5 Ab3:2 | Ab3:1 Ab3:1 Ab3:1 Ab3:1 | G3:3 r:1
 Ab3:1.5 Ab3:.5 Eb3:1.5 Ab3:.5 | Ab3:1.5 Ab3:.5 Ab3:2 | Ab3:1 Ab3:1 G3:.5 G3:1.5 | Ab3:3`,

  B:`Ab2:1
 Ab2:1.5 Ab2:.5 Ab2:1.5 Ab2:.5 | Db3:1.5 Db3:.5 Ab2:2 | Ab2:1 Ab2:1 Ab3:.5 Ab3:1.5 | Eb3:3 Ab2:1
 Ab2:1.5 Ab2:.5 Ab2:1.5 Ab2:.5 | Db3:1.5 Db3:.5 Ab2:2 | F3:1 F3:1 Eb3:.5 Eb3:1.5 | Ab2:2 r:1
 Ab2:.5 Ab2:1.5 Ab2:2 | Db3:.5 Db3:1.5 Db3:2 | Ab2:1 Ab2:1 Ab2:1 C3:1 | Eb3:3 r:1
 Ab2:1.5 Ab2:.5 Ab2:1.5 Ab2:.5 | Db3:1.5 Db3:.5 Ab2:2 | F3:1 F3:1 Eb3:.5 Eb3:1.5 | Ab2:3`
});
