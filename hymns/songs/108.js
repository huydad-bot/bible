/* 찬송가 108장 — 그 어린 주 예수 (성탄) */
registerSong({
  n: 108,
  title: '그 어린 주 예수',
  tune: 'CRADLE HYMN',
  composer: 'J. E. Spilman (arr. C. H. Gabriel)',
  key: 'Ab',
  meter: '3/4',
  pickup: 1,
  tempo: 100,
  tempoText: '보통으로',
  verses: 3,
  bars: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 48, 51],   // '네'가 2박 → 아멘
  doubleBars: [48],
  lineBreaks: [19, 36],
  fermatas: [41],
  melisma: [3.5, 27.5],   // '주'·'별' (C–B♭ 8분음표 두 개를 한 글자로)
  intro: { fl: [[0, 12], [36, 48]], l4: [[36, 48]] },   // 악보의 ┌ ┐ 전주 표시 = 첫 4마디 + 끝 줄
  chords: {1:'Ab',7:'Db',10:'Ab',15:'Eb',16:'Ab',19:'Ab',21:'Bb7',22:'Eb',25:'Ab',31:'Db',34:'Ab',
           37:'Ab',39:'Eb',40:'Ab',42:'Db',43:'Ab',45:'Eb7',46:'Ab',48:'Db',51:'Ab'},

  S:`Eb4:1 | Ab4:1 Ab4:1 C5:.5 Bb4:.5 | Ab4:1 Ab4:1 Eb4:1 | F4:1 Ab4:1 F4:1 | Eb4:2 Eb4:1 | Ab4:1 Ab4:1 Bb4:1 | C5:1 C5:1 Eb5:1
 Eb5:1 C5:1 Ab4:1 | Bb4:2 Eb4:1 | Ab4:1 Ab4:1 C5:.5 Bb4:.5 | Ab4:1 Ab4:1 Eb4:1 | F4:1 Db5:1 F4:1 | Eb4:2
 Eb4:1 | Ab4:1 Ab4:1 Bb4:1 | C5:1 Eb5:1 Db5:1 | Eb4:1 Eb4:1 G4:1 | Ab4:2 | Ab4:3 | Ab4:3`,

  A:`Eb4:1 | Eb4:1 Eb4:1 Eb4:1 | Eb4:1 Eb4:1 C4:1 | Db4:1 F4:1 Db4:1 | C4:2 C4:1 | C4:1 Eb4:1 Eb4:1 | Eb4:1 Eb4:1 Eb4:1
 Eb4:1 Eb4:1 D4:1 | Eb4:2 Eb4:1 | Eb4:1 Eb4:1 Eb4:1 | Eb4:1 Eb4:1 C4:1 | Db4:1 F4:1 Db4:1 | C4:2
 C4:1 | C4:1 Eb4:1 Eb4:1 | Eb4:1 Eb4:1 F4:1 | Eb4:1 C4:1 Db4:1 | C4:2 | F4:3 | C4:3`,

  T:`Eb3:1 | C4:1 C4:1 Eb4:.5 Db4:.5 | C4:1 C4:1 Ab3:1 | Ab3:1 Ab3:1 Ab3:1 | Ab3:2 Ab3:1 | Ab3:1 Ab3:1 G3:1 | Ab3:1 Ab3:1 C4:1
 C4:1 Ab3:1 Ab3:1 | G3:2 Eb3:1 | C4:1 C4:1 Eb4:.5 Db4:.5 | C4:1 C4:1 Ab3:1 | Ab3:1 Ab3:1 Ab3:1 | Ab3:2
 Ab3:1 | Ab3:1 Ab3:1 G3:1 | Ab3:1 Ab3:1 Bb3:1 | C4:1 Ab3:1 Bb3:1 | Ab3:2 | F3:3 | Eb3:3`,

  B:`Eb3:1 | Ab2:1 Ab2:1 Ab2:1 | Ab2:1 Ab2:1 Ab2:1 | Db3:1 Db3:1 Db3:1 | Ab2:2 Ab2:1 | Ab2:1 C3:1 Eb3:1 | Ab3:1 Ab3:1 Ab3:1
 Ab3:1 Ab3:1 F3:1 | Eb3:2 Eb3:1 | Ab2:1 Ab2:1 Ab2:1 | Ab2:1 Ab2:1 Ab2:1 | Db3:1 Db3:1 Db3:1 | Ab2:2
 Ab2:1 | Ab2:1 C3:1 Eb3:1 | Ab3:1 C3:1 Db3:1 | Eb3:1 Eb3:1 Eb3:1 | Ab2:2 | Db3:3 | Ab2:3`
});
