/* 찬송가 94장 — 주 예수보다 더 귀한 것은 없네 (예수 그리스도) */
registerSong({
  n: 94,
  title: '주 예수보다 더 귀한 것은 없네',
  tune: "I'D RATHER HAVE JESUS",
  composer: 'G. B. Shea',
  year: 1929,
  key: 'Db',
  meter: '3/4',
  pickup: 1,
  tempo: 100,
  tempoText: '보통으로',
  verses: 3,
  refrainAt: 48,          // 후렴은 8분음표 못갖춘 '세상'부터
  lineBreaks: [16, 31, 48, 64, 79],
  melisma: [20, 42.5, 54.5, 84.5],   // '수'(A♭–G♭) · '잊'(D♭–E♭) · '다'(B♭–C) · '예'(D♭–F)
  intro: { fl: [[0, 12], [84, 96]], l4: [[84, 96]] },   // 악보의 ┌ ┐ 전주 표시
  chords: {1:'Db',7:'Gb',10:'Db',16:'Db',22:'Ab',25:'Db',31:'Gb',34:'Db',45:'Ab',46:'Db',
           49:'Ab7',55:'Bbm',57:'Gb',58:'Db',61:'Ab7',64:'Ab7',67:'Gb',70:'Db',79:'Gb',82:'Db',88:'Ab7',91:'Gb',94:'Db'},

  S:`Db4:1 | F4:1.5 F4:.5 F4:.5 F4:.5 | Ab4:2 Db4:.5 Db4:.5 | Db5:1.5 Db5:.5 Bb4:1 | Ab4:2 Db4:1 | F4:1.5 F4:.5 F4:.5 F4:.5
 Ab4:1.5 Ab4:.5 Ab4:1 | Ab4:1 Gb4:1 F4:1 | Eb4:2 Db4:1 | F4:1.5 F4:.5 F4:.5 F4:.5 | Ab4:2 Db4:1
 Db5:2 Bb4:1 | Ab4:2 Db4:1 | F4:1.5 F4:.5 F4:.5 F4:.5 | Ab4:2 Db4:.5 Eb4:.5 | F4:2 Eb4:1 | Db4:2
 Ab4:.5 Db5:.5 | C5:2 Db5:1 | Eb5:2 Bb4:.5 C5:.5 | Db5:2 Bb4:1 | Ab4:2 Ab4:.5 Db5:.5 | C5:2 Db5:1
 Eb5:2 Bb4:.5 C5:.5 | Db5:3~ | Db5:2 Db4:1 | F4:1.5 F4:.5 F4:.5 F4:.5 | Ab4:2 Db4:.5 Db4:.5
 Db5:1.5 Db5:.5 Bb4:1 | Ab4:2 Db4:.5 F4:.5 | Ab4:2 Ab4:.5 Ab4:.5 | Eb4:2 Db4:1 | Db4:3~ | Db4:2`,

  A:`Db4:1 | Db4:1.5 Db4:.5 Db4:.5 Db4:.5 | Db4:2 Db4:.5 Db4:.5 | Db4:1 Gb4:1 Gb4:1 | F4:2 Db4:1 | Db4:1.5 Db4:.5 Db4:.5 Db4:.5
 Db4:1.5 Db4:.5 Db4:1 | Db4:1 C4:1 Db4:1 | C4:2 Db4:1 | Db4:1.5 Db4:.5 Db4:.5 Db4:.5 | Db4:2 Db4:1
 Db4:1 Gb4:1 Gb4:1 | F4:2 Db4:1 | Db4:1.5 Db4:.5 Db4:.5 Db4:.5 | Db4:2 Db4:.5 Eb4:.5 | Db4:2 Db4:.5 C4:.5 | Ab3:2
 F4:.5 F4:.5 | Gb4:2 F4:1 | Gb4:2 Gb4:.5 Gb4:.5 | F4:2 Gb4:1 | F4:2 F4:.5 F4:.5 | Gb4:2 F4:1
 Gb4:2 Gb4:.5 Gb4:.5 | Gb4:3 | F4:2 Db4:1 | Db4:1.5 Db4:.5 Db4:.5 Db4:.5 | Db4:2 Db4:.5 Db4:.5
 Db4:1 Gb4:1 Gb4:1 | F4:2 Db4:.5 F4:.5 | Db4:2 F4:.5 F4:.5 | Db4:1 C4:1 Ab3:1 | Bb3:3 | Ab3:2`,

  T:`F3:1 | Ab3:1.5 Ab3:.5 Ab3:.5 Ab3:.5 | Ab3:2 Cb4:.5 Cb4:.5 | Bb3:1.5 Bb3:.5 Db4:1 | Db4:2 F3:1 | Ab3:1.5 Ab3:.5 Ab3:.5 Ab3:.5
 Ab3:1.5 Ab3:.5 Ab3:1 | Ab3:2 Ab3:1 | Ab3:2 F3:1 | Ab3:1.5 Ab3:.5 Ab3:.5 Ab3:.5 | Ab3:2 Cb4:1
 Bb3:2 Db4:1 | Db4:2 F3:1 | Ab3:1.5 Ab3:.5 Ab3:.5 Ab3:.5 | Cb4:2 Bb3:.5 A3:.5 | Ab3:2 Gb3:1 | F3:2
 Db4:.5 Ab3:.5 | Ab3:2 Ab3:1 | C4:2 Db4:.5 Eb4:.5 | Db4:2 Db4:1 | Db4:2 Db4:.5 Ab3:.5 | Ab3:2 Ab3:1
 C4:2 A3:.5 A3:.5 | Bb3:3 | Ab3:2 F3:1 | Ab3:1.5 Ab3:.5 Ab3:.5 Ab3:.5 | Ab3:2 Cb4:.5 Cb4:.5
 Bb3:1.5 Bb3:.5 Db4:1 | Db4:2 F3:.5 Ab3:.5 | F3:2 Ab3:.5 Ab3:.5 | Gb3:2 Gb3:1 | Gb3:3 | F3:2`,

  B:`Db3:1 | Db3:1.5 Db3:.5 Db3:.5 Db3:.5 | F3:2 F3:.5 F3:.5 | Gb3:1.5 Gb3:.5 Gb3:1 | Db3:2 Db3:1 | Db3:1.5 Db3:.5 Db3:.5 Db3:.5
 F3:1.5 F3:.5 F3:1 | F3:1 Eb3:1 Db3:1 | Ab2:2 Db3:1 | Db3:1.5 Db3:.5 Db3:.5 Db3:.5 | F3:2 F3:1
 Gb3:2 Gb3:1 | Db3:2 Db3:1 | Db3:1.5 Db3:.5 Db3:.5 Db3:.5 | F3:2 Gb3:1 | Ab3:2 Ab2:1 | Db3:2
 Db3:.5 F3:.5 | Eb3:2 Db3:1 | Ab3:2 Ab3:1 | Bb3:2 Gb3:1 | Db3:2 Db3:.5 F3:.5 | Eb3:2 Db3:1
 Ab3:2 Eb3:.5 Eb3:.5 | Db3:3~ | Db3:2 Db3:1 | Db3:1.5 Db3:.5 Db3:.5 Db3:.5 | F3:2 F3:.5 F3:.5
 Gb3:1.5 Gb3:.5 Gb3:1 | Db3:2 Db3:1 | Ab2:2 Ab2:.5 Ab2:.5 | Ab2:2 Ab2:1 | Db3:3~ | Db3:2`
});
