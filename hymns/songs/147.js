/* 찬송가 147장 — 거기 너 있었는가 (고난) */
registerSong({
  n: 147,
  title: '거기 너 있었는가',
  tune: 'WERE YOU THERE',
  composer: 'Afro-American Spiritual',
  key: 'Eb',
  meter: '4/4',
  pickup: 2,
  tempo: 100,
  tempoText: '보통으로',
  verses: 5,
  bars: [2,6,10,14,18,22,26,30,34,38,42,46,50,52,54,58,62,64],   // 3단 끝은 2박 마디, 4단은 '거기' 2박으로 시작
  lineBreaks: [14, 34, 52],
  fermatas: [51, 62],
  melisma: [28, 29.5, 30],   // '오–'(B♭–E♭–C–B♭)
  intro: { fl: [[34, 64]], l4: [[52, 64]] },   // 악보의 ┌ ┐ 전주 표시 = 3~4단
  chords: {2:'Eb',8:'Bb',10:'Eb',14:'Gm',18:'Cm',20:'Eb',22:'Bb',26:'Eb',28:'Ab',30:'Eb',
           34:'Ab',35:'Eb',38:'G',40:'Cm',42:'Ab',46:'Abm',47:'Eb',50:'Ab',51:'Bb',52:'Ab',54:'Eb',59:'Bb7',62:'Eb'},

  S:`Bb3:1 Eb4:1 | G4:2 G4:1 G4:1 | Eb4:1 Eb4:1 G4:1.5 G4:.5 | Eb4:2 Eb4:1 G4:1
 Bb4:2 Bb4:1 Bb4:1 | C5:1 Bb4:1 Bb4:1.5 Ab4:.5 | F4:4 | Bb4:2 Eb5:1.5 C5:.5 | Bb4:4
 C5:1 Bb4:2 G4:1 | G4:1.5 F4:.5 Eb4:1 Eb4:1 | F4:1 Eb4:3 | Eb4:1 Eb4:3 | C4:1 Bb3:1
 Eb4:1 Ab4:1 | G4:2 G4:1 G4:1 | F4:1 Eb4:1 G4:1.5 F4:.5 | G4:2`,

  A:`Bb3:1 Bb3:1 | Eb4:2 Eb4:1 Eb4:1 | C4:1 C4:1 Eb4:1.5 Eb4:.5 | Bb3:2 Bb3:1 Eb4:1
 D4:2 Eb4:1 F4:1 | Eb4:1 F4:1 Eb4:1.5 F4:.5 | D4:4 | Eb4:1 D4:1 Eb4:1 Ab4:1 | G4:1 F4:1 Eb4:1 Db4:1
 C4:1 Eb4:2 Eb4:1 | D4:1.5 D4:.5 C4:1 C4:1 | C4:1 C4:3 | Cb4:1 Bb3:3 | Ab3:1 F3:1
 Ab3:1 C4:1 | Bb3:1 Eb4:1 Eb4:1 Eb4:1 | D4:1 Eb4:1 D4:1.5 D4:.5 | Eb4:2`,

  T:`Bb3:1 Bb3:1 | Bb3:2 Bb3:1 C4:1 | C4:1 G3:1 Bb3:1.5 Ab3:.5 | G3:2 G3:1 C4:1
 Bb3:1 Ab3:1 G3:1 F3:1 | G3:1 Bb3:1 G3:1.5 Ab3:.5 | Bb3:4 | Bb3:1 Ab3:1 Bb3:1 C4:1 | Eb4:1 D4:1 Bb3:2
 Ab3:1 G3:2 Bb3:1 | Ab3:1.5 Ab3:.5 G3:1 G3:1 | Ab3:1 Ab3:3 | Eb3:1 Eb3:3 | Eb3:1 D3:1
 Eb3:1 Eb3:1 | Eb3:1 F3:1 C4:1 Bb3:1 | Ab3:1 G3:1 Bb3:1.5 Ab3:.5 | G3:2`,

  B:`Bb2:1 G3:1 | Eb3:2 D3:1 C3:1 | Ab2:1 C3:1 Bb2:1.5 Bb2:.5 | Eb3:2 Eb3:1 C3:1
 G2:2 Eb3:1 D3:1 | C3:1 D3:1 Eb3:1.5 F3:.5 | Ab3:4 | G3:1 F3:1 G3:1 Ab3:1 | C4:1 Bb3:1 G3:2
 Ab2:1 Eb3:2 Eb3:1 | B2:1.5 Bb2:.5 C3:1 Bb2:1 | Ab2:1 Ab2:3 | Ab2:1 G2:3 | Ab2:1 Bb2:1
 C3:1 Ab2:1 | Bb2:2 Bb2:1 Bb2:1 | Bb2:1 C3:1 Bb2:1.5 Bb2:.5 | Eb3:2`
});
