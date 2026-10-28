/* 찬송가 1장 — 만복의 근원 하나님 (송영) */
registerSong({
  n: 1,
  title: '만복의 근원 하나님',
  tune: 'OLD HUNDREDTH',
  composer: 'L. Bourgeois (Genevan Psalter)',
  year: 1551,
  key: 'Ab',
  meter: '4/4',
  pickup: 1,
  tempo: 80,
  tempoText: '보통으로',
  verses: 1,
  bars: [1, 5, 9, 13, 17, 21, 25, 29, 32],   // 아멘 앞 마디가 3박이라 마디선 직접 지정
  doubleBars: [32],
  fermatas: [7, 15, 23, 31],
  lineBreaks: [16],
  intro: { fl: [[0, 9], [25, 32]], l4: [[17, 32]] },
  chords: {1:'Ab',6:'Eb',7:'Ab',11:'Eb',13:'Db',15:'Eb',17:'Eb',21:'Db',22:'Eb',23:'Ab',
           27:'Eb',29:'Ab',30:'Eb',31:'Ab',32:'Db',34:'Ab'},

  S:`Ab4:1
 Ab4:1 G4:1 F4:1 Eb4:1 | Ab4:1 Bb4:1 C5:1 C5:1 | C5:1 C5:1 Bb4:1 Ab4:1 | Db5:1 C5:1 Bb4:1 Ab4:1
 Bb4:1 C5:1 Bb4:1 Ab4:1 | F4:1 G4:1 Ab4:1 Eb5:1 | C5:1 Ab4:1 Bb4:1 Db5:1 | C5:1 Bb4:1 Ab4:1
 Ab4:2 Ab4:2`,

  A:`Eb4:1
 Eb4:1 Eb4:1 C4:1 C4:1 | C4:1 Eb4:1 Eb4:1 Eb4:1 | Eb4:1 Eb4:1 Eb4:1 C4:1 | F4:1 Eb4:1 Eb4:1 Eb4:1
 Eb4:1 Eb4:1 Eb4:1 Eb4:1 | Db4:1 Db4:1 C4:1 Eb4:1 | Eb4:1.5 D4:.5 Eb4:1 F4:1 | Eb4:1.5 Db4:.5 C4:1
 Db4:2 C4:2`,

  T:`C4:1
 C4:1 Bb3:1 Ab3:1 G3:1 | Ab3:1 G3:1 Ab3:1 C4:1 | Ab3:1 Ab3:1 G3:1 Ab3:1 | Ab3:1 Ab3:1 G3:1 C4:1
 Bb3:1 Ab3:1 G3:1 Ab3:1 | Ab3:1 Eb3:1 Eb3:1 C4:1 | Ab3:1 Ab3:1 G3:1 Ab3:1 | Ab3:1 G3:1 Ab3:1
 F3:2 Eb3:2`,

  B:`Ab3:1
 Ab3:1 Eb3:1 F3:1 C3:1 | F3:1 Eb3:1 Ab2:1 Ab3:1 | Ab3:1 Ab3:1 Eb3:1 F3:1 | Db3:1 Ab2:1 Eb3:1 Ab3:1
 G3:1 Ab3:1 Eb3:1 C3:1 | Db3:1 Bb2:1 Ab2:1 Ab3:1 | Ab3:1 F3:1 Eb3:1 Db3:1 | Eb3:1 Eb3:1 Ab2:1
 Db3:2 Ab2:2`
});
