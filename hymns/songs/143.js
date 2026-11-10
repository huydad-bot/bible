/* 찬송가 143장 — 웬말인가 날 위하여 (고난) */
registerSong({
  n: 143,
  title: '웬말인가 날 위하여',
  tune: 'MARTYRDOM',
  composer: 'H. Wilson (adapt. and harm. R. Smith)',
  year: 1825,
  key: 'Ab',
  meter: '3/4',
  pickup: 1,
  tempo: 100,
  tempoText: '보통으로',
  verses: 5,
  bars: [1,4,7,10,13,16,19,22,25,28,31,34,37,40,42,45,48],   // '나'가 2박 → 아멘
  doubleBars: [42],
  lineBreaks: [21],
  melisma: [6.5, 15.5, 35, 36.5],   // '날'(A♭–B♭) · '아'(C–B♭) · '해'(E♭–F) · '받'(A♭–B♭)
  intro: { fl: [[0, 12], [33, 42]], l4: [[21, 42]] },   // 악보의 ┌ ┐ 전주 표시
  chords: {1:'Ab',3:'Db',4:'Db',7:'Eb7',10:'Ab',13:'Ab',15:'Eb7',16:'Ab',18:'Db',19:'Eb',
           21:'Eb',22:'Ab',24:'Eb',25:'Fm',27:'Db',28:'Db',30:'Ab',31:'Eb',33:'Ab',34:'Ab',36:'Fm',37:'Ab',39:'Eb7',40:'Ab',42:'Db',45:'Ab'},

  S:`Eb4:1 | Ab4:2 F4:1 | F4:2 Ab4:.5 Bb4:.5 | C5:2 Bb4:1 | Ab4:2 C5:1 | Eb5:2 C5:.5 Bb4:.5 | Ab4:2 C5:1 | Bb4:2
 Eb5:1 | C5:2 Bb4:1 | Ab4:2 C5:1 | Eb5:2 C5:1 | Bb4:2 C5:1 | Eb4:1 F4:1 Ab4:.5 Bb4:.5 | C5:2 Bb4:1 | Ab4:2 | Ab4:3 | Ab4:3`,

  A:`C4:1 | Eb4:2 Db4:1 | Db4:2 Eb4:.5 F4:.5 | Eb4:2 G4:1 | Eb4:2 Eb4:1 | Eb4:2 Eb4:1 | Eb4:2 Eb4:1 | Eb4:2
 Eb4:1 | Eb4:2 G4:1 | Ab4:2 F4:1 | F4:2 Eb4:1 | Eb4:2 Eb4:1 | Eb4:1 Eb4:1 C4:.5 Db4:.5 | Eb4:2 Db4:1 | C4:2 | Db4:3 | C4:3`,

  T:`Ab3:1 | Ab3:2 Ab3:1 | Ab3:2 Ab3:1 | Bb3:2 Db4:1 | C4:2 Ab3:1 | C4:2 Ab3:.5 G3:.5 | Ab3:2 Ab3:1 | G3:2
 Bb3:1 | C4:2 Db4:1 | C4:2 Ab3:1 | Ab3:2 Ab3:1 | G3:2 Ab3:1 | Ab3:2 Bb3:1 | Ab3:2 G3:1 | Ab3:2 | F3:3 | Eb3:3`,

  B:`Ab2:1 | C3:2 Db3:1 | Ab2:2 C3:.5 Db3:.5 | Eb3:2 Eb3:1 | Ab2:2 Ab3:1 | Ab3:2 Ab2:.5 Bb2:.5 | C3:2 Ab2:1 | Eb3:2
 G3:1 | Ab3:2 Eb3:1 | F3:2 Eb3:1 | Db3:2 Ab2:1 | Eb3:2 Ab2:1 | C3:1 Db3:1 F3:1 | Eb3:2 Eb3:1 | Ab2:2 | Db3:3 | Ab2:3`
});
