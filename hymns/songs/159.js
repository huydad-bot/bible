/* 찬송가 159장 — 주 예수 내 맘에 들어와 (거룩한 생활) */
registerSong({
  n: 159,
  title: '주 예수 내 맘에 들어와',
  tune: 'McDANIEL',
  composer: 'C. H. Gabriel',
  year: 1914,
  key: 'Ab',
  meter: '4/4',
  pickup: 1,
  tempo: 92,
  tempoText: '보통으로',
  verses: 5,
  refrainAt: 32,
  lineBreaks: [16, 32, 48],
  fermatas: [29, 32, 55],
  // 후렴 테너·베이스 메아리 "주 예수내맘 에 맘에오심" (10음씩 2구간, 한 번만 입력하면 반복)
  echo: { voice: 'T', spans: [[32, 40], [40, 48]] },
  intro: { fl: [[0, 16]], l4: [[48, 64]] },   // 악보의 ┌ ┐ 전주 표시
  chords: {1:'Ab',9:'Db',13:'Ab',17:'Ab',25:'Bb7',29:'Eb',
           33:'Ab',41:'Db',45:'Ab',49:'Ab',56:'Db',57:'Ab',58.5:'Eb7',61:'Ab'},

  S:`C4:.5 Db4:.5
 Eb4:1 F4:.5 G4:.5 Ab4:1 Ab4:.5 Bb4:.5 | C5:1 C5:.5 Db5:.5 C5:1.5 Bb4:.5 | Ab4:.5 Ab4:1 F4:.5 Ab4:.5 Ab4:1 Ab4:.5 | Eb4:3
 C4:.5 Db4:.5
 Eb4:1 F4:.5 G4:.5 Ab4:1 Ab4:.5 Bb4:.5 | C5:1 C5:.5 Db5:.5 C5:1.5 C5:.5 | C5:.5 Bb4:1 Bb4:.5 D5:.5 D5:1 Bb4:.5 | Eb5:3
 Eb5:1
 C5:.5 C5:1 Bb4:.5 C5:.5 C5:1 Ab4:.5 | C5:3 Bb4:1 | Ab4:.5 Ab4:1 F4:.5 Ab4:.5 Ab4:1 Ab4:.5 | Eb4:3
 C4:.5 Db4:.5
 Eb4:1 F4:.5 G4:.5 Ab4:1 Ab4:.5 Bb4:.5 | C5:1 C5:.5 Db5:.5 Eb5:1 Db5:1 | C5:.5 C5:1 Ab4:.5 C5:.5 C5:1 Bb4:.5 | Ab4:3`,

  A:`Ab3:.5 Bb3:.5
 C4:1 Db4:.5 Db4:.5 C4:1 C4:.5 Db4:.5 | Eb4:1 Eb4:.5 F4:.5 Eb4:1.5 Eb4:.5 | F4:.5 F4:1 Db4:.5 F4:.5 F4:1 Db4:.5 | C4:3
 Ab3:.5 Bb3:.5
 C4:1 Db4:.5 Db4:.5 C4:1 C4:.5 Db4:.5 | Eb4:1 Eb4:.5 F4:.5 Eb4:1.5 Eb4:.5 | D4:.5 D4:1 D4:.5 Ab4:.5 Ab4:1 Ab4:.5 | G4:1 Ab4:1 Bb4:1
 G4:1
 Eb4:.5 Eb4:1 Db4:.5 Eb4:1 C4:1 | Eb4:.5 Eb4:1 Eb4:.5 Eb4:1 Eb4:1 | F4:.5 F4:1 Db4:.5 F4:1 Db4:1 | C4:.5 C4:1 C4:.5 C4:1
 Ab3:.5 Bb3:.5
 C4:1 Db4:.5 Db4:.5 C4:1 Eb4:.5 Eb4:.5 | Eb4:1 Eb4:.5 Eb4:.5 Ab4:1 F4:1 | Eb4:.5 Eb4:1 C4:.5 Eb4:.5 Eb4:1 Db4:.5 | C4:3`,

  T:`Eb3:.5 Eb3:.5
 Ab3:1 Ab3:.5 Ab3:.5 Eb3:1 Eb3:.5 Eb3:.5 | Ab3:1 Ab3:.5 Ab3:.5 Ab3:1.5 Ab3:.5 | Db4:.5 Db4:1 Ab3:.5 Db4:.5 Db4:1 Ab3:.5 | Ab3:3
 Eb3:.5 Eb3:.5
 Ab3:1 Ab3:.5 Ab3:.5 Eb3:1 Eb3:.5 Eb3:.5 | Ab3:1 Ab3:.5 Ab3:.5 Ab3:1.5 Ab3:.5 | Ab3:.5 Ab3:1 Ab3:.5 Bb3:.5 Bb3:1 Bb3:.5 | Bb3:1 C4:1 Db4:1
 Bb3:1
 Ab3:.5 Ab3:1 Ab3:.5 Ab3:1 Eb3:1 | Ab3:.5 Ab3:1 Ab3:.5 Ab3:1 Ab3:1 | Db4:.5 Db4:1 Ab3:.5 Db4:1 Ab3:1 | Ab3:.5 Ab3:1 Ab3:.5 Ab3:1
 Eb3:.5 Eb3:.5
 Ab3:1 Ab3:.5 Ab3:.5 Eb3:1 Ab3:.5 G3:.5 | Ab3:1 Ab3:.5 Bb3:.5 C4:1 Ab3:1 | Ab3:.5 Ab3:1 Ab3:.5 Ab3:.5 Ab3:1 Eb3:.5 | Eb3:3`,

  B:`Ab2:.5 Ab2:.5
 Ab2:1 Ab2:.5 Ab2:.5 Ab2:1 Ab2:.5 Ab2:.5 | Ab2:1 Ab2:.5 Ab2:.5 Ab2:1.5 C3:.5 | Db3:.5 Db3:1 Db3:.5 Db3:.5 Db3:1 F3:.5 | Ab3:3
 Ab2:.5 Ab2:.5
 Ab2:1 Ab2:.5 Ab2:.5 Ab2:1 Ab2:.5 Ab2:.5 | Ab2:1 Ab2:.5 Ab2:.5 Ab2:1.5 Ab2:.5 | Bb2:.5 Bb2:1 Bb2:.5 Bb2:.5 Bb2:1 D3:.5 | Eb3:3
 Eb3:1
 Ab2:.5 Ab2:1 Ab2:.5 Ab2:1 Ab2:1 | Ab2:.5 Ab2:1 Ab2:.5 Ab2:1 C3:1 | Db3:.5 Db3:1 Db3:.5 Db3:1 F3:1 | Ab3:.5 Eb3:1 C3:.5 Ab2:1
 Ab2:.5 Ab2:.5
 Ab2:1 Ab2:.5 Ab2:.5 Ab2:1 C3:.5 Eb3:.5 | Ab3:1 Ab3:.5 Ab3:.5 Ab3:1 Db3:1 | Eb3:.5 Eb3:1 Eb3:.5 Eb3:.5 Eb3:1 Eb3:.5 | Ab2:3`
});
