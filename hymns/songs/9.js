/* 찬송가 9장 — 주 우리 하나님 (경배, YIGDAL/LEONI) */
registerSong({
  n: 9,
  title: '주 우리 하나님',
  tune: 'YIGDAL (LEONI)',
  composer: 'Hebrew Melody',
  year: 1780,
  key: 'Fm',
  meter: '4/4',
  pickup: 1,
  tempo: 84,
  tempoText: '보통으로',
  verses: 4,
  bars: [1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57, 61, 64],
  doubleBars: [64],
  lineBreaks: [16, 32, 48],
  melisma: [40.5, 41.5, 42.5, 54.5, 56.5],   // 주·앞·에·름·늘 — 8분음표 두 개를 한 글자로
  intro: { fl: [[0, 16], [48, 64]], l4: [[48, 64]] },   // 악보의 ┌ ┐ 전주 표시
  chords: {1:'Fm',5:'C',9:'Bbm',11:'Eb',13:'Ab',
           16:'C',17:'Fm',19:'Ab',21:'Eb',23:'Fm',24:'Db',25:'Ab',27:'Eb',29:'Ab',
           33:'Ab',34:'C',35:'Fm',37:'Eb',41:'Fm',43:'Ab',44:'Bbm',45:'C',
           49:'Fm',52:'Eb',53:'Ab',55:'Bbm',57:'Fm',59:'C7',61:'Fm',64:'Bbm',66:'F'},

  S:`C4:1
 F4:1 G4:1 Ab4:1 Bb4:1 | C5:3 Ab4:1 | Bb4:1 C5:1 Db5:1 Eb5:1 | C5:3
 G4:1 | Ab4:1 Bb4:1 C5:1 Db5:1 | Eb5:1 G4:1 Ab4:1 Db5:1 | C5:2 Bb4:2 | Ab4:3
 Ab4:1 | C5:1 C5:1 C5:1 C5:1 | Bb4:3 Ab4:.5 G4:.5 | F4:.5 G4:.5 Ab4:.5 Bb4:.5 C5:1 F4:1 | E4:3
 C4:1 | F4:1 G4:1 Ab4:1 Bb4:1 | C5:1 Bb4:.5 C5:.5 Db5:1 C5:.5 Bb4:.5 | Ab4:2 G4:2 | F4:3
 F4:2 F4:2`,

  A:`Ab3:1
 C4:1 C4:1 C4:1 F4:1 | E4:3 Eb4:1 | F4:1 F4:1 F4:1 Eb4:1 | Eb4:3
 C4:1 | C4:1 Eb4:1 Eb4:1 F4:1 | Eb4:1 Db4:1 C4:1 F4:1 | Eb4:2 Eb4:1 Db4:1 | C4:3
 Eb4:1 | Eb4:1 G4:1 F4:1 Eb4:1 | Eb4:3 C4:1 | C4:1 F4:1 Eb4:1 Db4:1 | C4:3
 C4:1 | C4:1 C4:1 C4:1 Eb4:1 | Eb4:1 F4:1 F4:1 G4:1 | F4:2 E4:2 | F4:3
 Db4:2 C4:2`,

  T:`F3:1
 Ab3:1 G3:1 F3:1 F3:1 | G3:3 Ab3:1 | F3:.5 G3:.5 A3:1 Bb3:1 G3:1 | Ab3:3
 E3:1 | F3:1 G3:1 Ab3:1 Ab3:1 | Ab3:1 Bb3:1 Ab3:1 Ab3:1 | Ab3:2 G3:2 | Ab3:3
 C4:1 | Ab3:1 Bb3:1 Ab3:1 Ab3:1 | G3:3 Bb3:1 | Ab3:1 F3:.5 G3:.5 Ab3:1 G3:1 | G3:3
 E3:1 | F3:1 E3:1 F3:1 G3:1 | Ab3:1 F3:.5 A3:.5 Bb3:1 Db4:1 | C4:2 C4:1 Bb3:1 | Ab3:3
 Bb3:2 A3:2`,

  B:`F2:1
 F3:1 E3:1 F3:1 Db3:1 | C3:3 C3:1 | Db3:1 C3:1 Bb2:1 Eb3:1 | Ab2:3
 C3:1 | F3:1 Eb3:1 Ab3:1 F3:1 | C3:1 Eb3:1 F3:1 Db3:1 | Eb3:2 Eb3:2 | Ab2:3
 Ab2:1 | Ab3:1 E3:1 F3:1 C3:1 | Eb3:3 E3:1 | F3:1 Db3:1 Ab2:1 Bb2:1 | C3:3
 C3:.5 Bb2:.5 | Ab2:1 C3:1 F3:1 Eb3:1 | Ab2:1 Db3:.5 C3:.5 Bb2:1 Bb2:1 | C3:2 C3:2 | F3:3
 Bb2:2 F3:2`
});
