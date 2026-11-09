/* 찬송가 91장 — 슬픈 마음 있는 사람 (예수 그리스도) */
registerSong({
  n: 91,
  title: '슬픈 마음 있는 사람',
  tune: 'PRECIOUS NAME',
  composer: 'W. H. Doane',
  year: 1871,
  key: 'Ab',
  meter: '4/4',
  pickup: 0,
  tempo: 100,
  tempoText: '조금 빠르게',
  verses: 4,
  refrainAt: 31,          // 후렴은 못갖춘마디 '예수'부터
  lineBreaks: [16, 31, 47],
  fermatas: [54],
  melisma: [54],          // '은' (F→A♭ 이음줄)
  intro: { fl: [[0, 31]], l4: [[47, 64]] },   // 악보의 ┌ ┐ 전주 표시 = 1~2단
  // 후렴 메아리(테너·베이스): "예수의" · "이름은"
  echo: { voice: 'B', spans: [[33, 35], [37, 39], [49, 51], [52, 55]] },
  chords: {0:'Ab',8:'Db',12:'Ab',16:'Eb',20:'Ab',24:'Eb',28:'Ab',32:'Db',36:'Ab',44:'Eb',
           48:'Ab',52:'Db',56:'Ab',59:'Eb',60:'Ab'},

  S:`Eb4:1 Ab4:1 C5:.75 Bb4:.25 Ab4:.75 Bb4:.25 | Ab4:2 Eb4:2 | F4:1 Ab4:1 G4:.75 F4:.25 Ab4:.75 F4:.25 | Eb4:4
 Eb4:1 Bb4:1 Ab4:.75 G4:.25 Ab4:.75 Bb4:.25 | C5:2 Ab4:2 | Bb4:1 Eb4:1 C5:.75 Bb4:.25 Ab4:.75 G4:.25 | Ab4:3
 Ab4:.75 G4:.25 | F4:3 Ab4:.5 F4:.5 | Eb4:3 Ab4:.5 Bb4:.5 | C5:1 Eb4:1 Ab4:1 C5:1 | Bb4:3
 C5:.75 Bb4:.25 | Ab4:3 Ab4:.5 G4:.5 | F4:2 Ab4:1 Ab4:.5 Bb4:.5 | C5:1 Ab4:1 C5:1 Bb4:1 | Ab4:4`,

  A:`C4:1 C4:1 Eb4:.75 Db4:.25 C4:.75 Db4:.25 | C4:2 C4:2 | Db4:1 F4:1 Eb4:.75 Db4:.25 F4:.75 Db4:.25 | C4:4
 Eb4:1 Eb4:1 Eb4:.75 Eb4:.25 Eb4:.75 Eb4:.25 | Eb4:2 Eb4:2 | Eb4:1 Eb4:1 Eb4:.75 Eb4:.25 Eb4:.75 Db4:.25 | C4:3
 C4:.75 Eb4:.25 | Db4:3 F4:.5 Db4:.5 | C4:3 Eb4:.5 Eb4:.5 | Eb4:1 C4:1 Eb4:1 Ab4:1 | G4:3
 Eb4:.75 Db4:.25 | C4:3 C4:.5 Eb4:.5 | Db4:2 F4:1 F4:.5 Fb4:.5 | Eb4:1 Eb4:1 Eb4:1 Db4:1 | C4:4`,

  T:`Ab3:1 Ab3:1 Ab3:.75 Ab3:.25 Ab3:.75 Ab3:.25 | Ab3:2 Ab3:2 | Ab3:1 Ab3:1 Ab3:.75 Ab3:.25 Ab3:.75 Ab3:.25 | Ab3:4
 G3:1 Db4:1 C4:.75 Bb3:.25 C4:.75 G3:.25 | Ab3:2 C4:2 | Db4:1 G3:1 Ab3:.75 Db4:.25 C4:.75 Bb3:.25 | Ab3:3
 r:1 | r:1 Ab3:.5 Ab3:.5 Ab3:1 r:1 | r:1 Ab3:.5 Ab3:.5 Ab3:1 Ab3:.5 G3:.5 | Ab3:1 Ab3:1 C4:1 Eb4:1 | Eb4:3
 r:1 | r:1 Ab3:.5 Ab3:.5 Ab3:1 Ab3:.5 Ab3:.5 | Ab3:1 Ab3:1 Ab3:1 Ab3:.5 Ab3:.5 | Ab3:1 C4:1 Ab3:1 G3:1 | Ab3:4`,

  B:`Ab2:1 Ab2:1 Ab2:.75 Ab2:.25 Ab2:.75 Ab2:.25 | Ab2:2 Ab2:2 | Db3:1 Db3:1 Db3:.75 Db3:.25 Db3:.75 Db3:.25 | Ab2:4
 Eb3:1 Eb3:1 Eb3:.75 Eb3:.25 Eb3:.75 Eb3:.25 | Ab2:2 Ab2:2 | Eb3:1 Eb3:1 Eb3:.75 Eb3:.25 Eb3:.75 Eb3:.25 | Ab2:3
 r:1 | r:1 Db3:.5 Db3:.5 Db3:1 r:1 | r:1 Ab2:.5 Ab2:.5 Ab2:1 C3:.5 Eb3:.5 | Ab3:1 Ab3:1 Ab3:1 Ab2:1 | Eb3:3
 r:1 | r:1 Ab2:.5 Ab2:.5 Ab2:1 Ab2:.5 C3:.5 | Db3:1 Db3:1 Db3:1 Db3:.5 Db3:.5 | Eb3:1 Eb3:1 Eb3:1 Eb3:1 | Ab2:4`
});
