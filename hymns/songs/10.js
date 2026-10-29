/* 찬송가 10장 — 하나님의 크신 사랑 (경배, BEECHER) */
registerSong({
  n: 10,
  title: '하나님의 크신 사랑',
  tune: 'BEECHER',
  composer: 'J. Zundel',
  year: 1870,
  key: 'Bb',
  meter: '4/4',
  pickup: 0,
  tempo: 88,
  tempoText: '보통으로',
  verses: 4,
  doubleBars: [64],
  lineBreaks: [16, 32, 48],
  melisma: [5.5, 13.5, 21.5, 29.5, 37.5, 45.5, 53.5, 61.5],   // 8분음표 두 개를 한 글자로 (신·리·원·소·비·시·원·소)
  intro: { fl: [[0, 32]], l4: [[48, 64]] },   // 악보의 ┌ ┐ 전주 표시 = 1~2단
  chords: {0:'Bb',8:'Eb',12:'F7',14:'Bb',16:'Bb',24:'Eb',26:'Bb',28:'F7',30:'Bb',
           32:'Gm',35:'D7',36:'Gm',38:'D',40:'Bb',44:'C7',46:'F7',
           48:'Bb',56:'Eb',58:'Bb',60:'F7',62:'Bb',64:'Eb',66:'Bb'},

  S:`F4:1 F4:1 G4:1 F4:1 | D5:1 C5:.5 D5:.5 C5:1 Bb4:1 | A4:1 G4:1 Bb4:1 G4:1 | F4:1 Eb4:.5 F4:.5 D4:2
 F4:1 F4:1 G4:1 F4:1 | D5:1 C5:.5 D5:.5 C5:1 Bb4:1 | G4:1 Eb5:1 D5:1 Bb4:1 | A4:1 G4:.5 A4:.5 Bb4:2
 Bb4:1 Bb4:1 Bb4:1 A4:1 | G4:1 A4:.5 G4:.5 F#4:1 D4:1 | D5:1 D5:1 Eb5:1 D5:1 | C5:1 C5:.5 D5:.5 C5:2
 F4:1 F4:1 G4:1 F4:1 | D5:1 C5:.5 D5:.5 C5:1 Bb4:1 | G4:1 Eb5:1 D5:1 Bb4:1 | A4:1 G4:.5 A4:.5 Bb4:2
 Bb4:2 Bb4:2`,

  A:`D4:1 D4:1 Eb4:1 D4:1 | F4:1 Eb4:.5 F4:.5 Eb4:1 D4:1 | F4:1 Eb4:1 G4:1 Eb4:1 | C4:1 C4:1 Bb3:2
 D4:1 D4:1 Eb4:1 D4:1 | F4:1 Eb4:.5 F4:.5 Eb4:1 D4:1 | Eb4:1 G4:1 F4:1 F4:1 | Eb4:1 Eb4:1 D4:2
 D4:1 G4:1 G4:1 F#4:1 | G4:1 D4:1 D4:1 D4:1 | D4:1 F4:1 G4:1 F4:1 | F4:1 E4:1 F4:1 Eb4:1
 D4:1 D4:1 Eb4:1 D4:1 | F4:1 Eb4:.5 F4:.5 Eb4:1 D4:1 | Eb4:1 G4:1 F4:1 F4:1 | Eb4:1 Eb4:1 D4:2
 Eb4:2 D4:2`,

  T:`F3:1 F3:1 Bb3:1 F3:1 | Bb3:1 A3:1 A3:1 Bb3:1 | Bb3:1 Bb3:1 Bb3:1 Bb3:1 | Bb3:1 A3:1 F3:2
 F3:1 F3:1 Bb3:1 F3:1 | Bb3:1 A3:1 A3:1 Bb3:1 | Bb3:1 Bb3:1 Bb3:1 D4:1 | C4:1 A3:1 F3:2
 G3:1 D4:1 D4:1 C4:1 | Bb3:1 C4:.5 Bb3:.5 A3:1 D3:1 | F3:1 Bb3:1 Bb3:1 Bb3:1 | A3:1 Bb3:1 A3:2
 F3:1 F3:1 Bb3:1 F3:1 | Bb3:1 A3:1 A3:1 Bb3:1 | Bb3:1 Bb3:1 Bb3:1 D4:1 | C4:1 F3:1 F3:2
 G3:2 F3:2`,

  B:`Bb2:1 Bb2:1 Bb2:1 Bb2:1 | Bb2:1 F3:1 F3:1 Bb2:1 | Eb3:1 Eb3:1 Eb3:1 Eb3:1 | F3:1 F3:1 Bb2:2
 Bb2:1 Bb2:1 Bb2:1 Bb2:1 | Bb2:1 F3:1 F#3:1 G3:1 | Eb3:1 Eb3:1 F3:1 F3:1 | F3:1 F3:1 Bb2:2
 G2:1 Bb2:1 Bb2:1 Bb2:1 | D3:1 D3:1 D3:1 D3:1 | Bb2:1 Bb2:1 Bb2:1 Bb2:1 | C3:1 C3:1 F3:2
 Bb2:1 Bb2:1 Bb2:1 Bb2:1 | Bb2:1 F3:1 F#3:1 G3:1 | Eb3:1 Eb3:1 F3:1 F3:1 | F3:1 F2:1 Bb2:2
 Eb3:2 Bb2:2`
});
