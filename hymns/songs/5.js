/* 찬송가 5장 — 이 천지간 만물들아 (송영, SESSIONS) */
registerSong({
  n: 5,
  title: '이 천지간 만물들아',
  tune: 'SESSIONS',
  composer: 'L. O. Emerson',
  key: 'Bb',
  meter: '4/4',
  pickup: 2,
  tempo: 84,
  tempoText: '보통으로',
  verses: 1,
  bars: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 52],   // '세' 마디가 2박
  doubleBars: [52],
  fermatas: [50],
  melisma: [11.5, 12, 43.5, 44],   // '아'·'고' 한 글자를 B♭–C–D 세 음에 이어 부름 (슬러)
  lineBreaks: [26],
  intro: { fl: [[0, 14], [46, 52]], l4: [[38, 52]] },   // 악보의 ┌ ┐ 전주 표시
  chords: {0:'Bb',14:'F',24:'Bb',26:'Gm',32:'F',38:'Bb',46:'F',50:'Bb',52:'Eb',54:'Bb'},

  S:`F4:2
 G4:1 F4:1 Bb4:2 | F4:2 G4:1 F4:1 | Bb4:1.5 C5:.5 D5:2 | C5:2 C5:1 D5:1 | C5:2 C5:2 | D5:1 C5:1 Bb4:2
 Bb4:2 Bb4:1 G4:1 | Bb4:2 C5:2 | C5:1 D5:1 C5:2 | F4:2 G4:1 F4:1 | Bb4:1.5 C5:.5 D5:2 | C5:2 D5:1 C5:1 | Bb4:2 | Bb4:2 Bb4:2`,

  A:`D4:2
 Eb4:1 D4:1 D4:2 | D4:2 Eb4:1 D4:1 | D4:1.5 Eb4:.5 F4:2 | F4:2 F4:1 F4:1 | F4:2 F4:2 | F4:1 Eb4:1 D4:2
 D4:2 D4:1 D4:1 | D4:2 F4:2 | F4:1 F4:1 F4:2 | D4:2 Eb4:1 D4:1 | D4:1.5 Eb4:.5 F4:2 | F4:2 F4:1 Eb4:1 | D4:2 | Eb4:2 D4:2`,

  T:`Bb3:2
 Bb3:1 Bb3:1 F3:2 | Bb3:2 Bb3:1 Bb3:1 | Bb3:4 | A3:2 A3:1 Bb3:1 | A3:2 A3:2 | Bb3:1 A3:1 Bb3:2
 G3:2 G3:1 Bb3:1 | G3:2 A3:2 | A3:1 Bb3:1 A3:2 | Bb3:2 Bb3:1 Bb3:1 | Bb3:4 | A3:2 Bb3:1 F3:1 | F3:2 | G3:2 F3:2`,

  B:`Bb2:2
 Bb2:1 Bb2:1 Bb2:2 | Bb2:2 Bb2:1 Bb2:1 | Bb2:4 | F3:2 F3:1 F3:1 | F3:2 F3:2 | F3:1 F3:1 Bb2:2
 G3:2 G3:1 G3:1 | G3:2 F3:2 | F3:1 F3:1 F3:2 | Bb2:2 Bb2:1 Bb2:1 | Bb2:4 | F3:2 F3:1 F3:1 | Bb2:2 | Eb3:2 Bb2:2`
});
