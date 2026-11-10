/* 찬송가 118장 — 영광 나라 천사들아 (성탄) */
registerSong({
  n: 118,
  title: '영광 나라 천사들아',
  tune: 'REGENT SQUARE',
  composer: 'H. T. Smart',
  year: 1867,
  key: 'Bb',
  meter: '4/4',
  pickup: 0,
  tempo: 100,
  tempoText: '조금 빠르게',
  verses: 5,
  refrainAt: 32,          // 후렴 '경배하세 경배하세…'
  doubleBars: [48],
  lineBreaks: [16, 32],
  melisma: [19.5, 27.5],  // '을'(F–E♭) · '심'(A–B♭)
  intro: { fl: [[0, 16]], l4: [[32, 48]] },   // 악보의 ┌ ┐ 전주 표시 = 첫 줄
  chords: {0:'Bb',8:'Eb',10:'Bb',12:'F7',14:'Bb',16:'Bb',22:'D',24:'Gm',28:'C7',30:'F',
           32:'F',36:'Bb',38:'Eb',40:'Cm',44:'F7',46:'Bb',48:'Eb',50:'Bb'},

  S:`F4:1 D4:1 Bb4:1 F4:1 | D5:1.5 C5:.5 Bb4:1 F4:1 | G4:1 G4:1 F4:1 Bb4:1 | F4:1 Eb4:1 D4:2
 F4:1 D4:1 Bb4:1 F4:.5 Eb4:.5 | D5:1.5 C5:.5 Bb4:1 A4:1 | Bb4:1 A4:1 G4:1 A4:.5 Bb4:.5 | A4:1 G4:1 F4:2
 C5:1.5 C5:.5 A4:1 F4:1 | D5:1.5 C5:.5 Bb4:1 G4:1 | Eb5:1 D5:1 C5:1 Bb4:1 | Bb4:1 A4:1 Bb4:2
 Bb4:2 Bb4:2`,

  A:`D4:1 Bb3:1 F4:1 D4:1 | F4:1.5 F4:.5 F4:1 F4:1 | Bb3:1 Bb3:1 Bb3:1 Bb3:1 | C4:1 A3:1 Bb3:2
 D4:1 Bb3:1 F4:1 F4:.5 Eb4:.5 | D4:1.5 Eb4:.5 D4:1 D4:1 | D4:1 D4:1 D4:1 D4:1 | F4:1 E4:1 F4:2
 F4:1.5 F4:.5 F4:1 F4:1 | F4:1.5 D4:.5 Eb4:1 Eb4:1 | G4:1 F4:1 Eb4:1 D4:.5 Eb4:.5 | F4:1.5 Eb4:.5 D4:2
 Eb4:2 D4:2`,

  T:`Bb3:1 F3:1 F3:1 Bb3:1 | Bb3:1.5 A3:.5 Bb3:1 Bb3:1 | G3:1 Bb3:1 F3:1 G3:1 | F3:1 F3:1 F3:2
 Bb3:1 Bb3:1 F3:1 F3:1 | Bb3:1.5 A3:.5 G3:1 F#3:1 | G3:1 F#3:1 D4:1 C4:.5 Bb3:.5 | C4:1 Bb3:1 A3:2
 A3:1.5 A3:.5 C4:1 A3:1 | Bb3:1.5 Ab3:.5 G3:1 Bb3:1 | C4:1 F3:1 G3:.5 A3:.5 Bb3:1 | C4:1 C4:1 Bb3:2
 G3:2 F3:2`,

  B:`Bb2:1 Bb2:1 D3:1 Bb2:1 | F3:1.5 Eb3:.5 D3:1 D3:1 | Eb3:1 Eb3:1 D3:1 G2:1 | A2:1 F2:1 Bb2:2
 Bb3:1 F3:1 D3:1 D3:.5 C3:.5 | Bb2:1.5 C3:.5 D3:1 D3:1 | G3:1 D3:1 Bb2:1 G2:1 | C3:1 C3:1 F2:2
 F3:1.5 F3:.5 F3:1 F3:1 | Bb2:1.5 Bb2:.5 Eb3:1 Eb3:1 | C3:1 D3:1 Eb3:.5 F3:.5 G3:1 | F3:1 F2:1 Bb2:2
 Eb3:2 Bb2:2`
});
