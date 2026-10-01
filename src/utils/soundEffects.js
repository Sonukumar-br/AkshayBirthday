/**
 * Sound effects & audio engine with built-in Web Audio Birthday Synth Melody
 * Plus robust MP3 audio playback & double extension fallback (/audio/birthday.mp3)
 */

class SoundEngine {
  constructor() {
    this.audioCtx = null;
    this.bgMusic = null;
    this.isPlayingMusic = false;
    this.isMuted = false;
    this.melodyInterval = null;
    this.isSynthMelodyPlaying = false;
    this.audioCandidates = [
      '/audio/birthday.mp3',
      '/audio/birthday.mp3.mp3',
      '/audio/birthday.m4a',
      '/audio/birthday.wav',
    ];
    this.currentCandidateIdx = 0;
  }

  initContext() {
    try {
      if (!this.audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          this.audioCtx = new AudioContext();
        }
      }
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume().catch(() => {});
      }
    } catch (e) {}
  }

  // Play single note on Web Audio Synth
  playNote(freq, type = 'sine', duration = 0.3, volume = 0.05) {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.audioCtx || this.audioCtx.state !== 'running') return;

      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(volume, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + duration);
    } catch (e) {}
  }

  // Play terminal keypress click
  playKeyClick() {
    this.playNote(600 + Math.random() * 200, 'sine', 0.05, 0.015);
  }

  // Play success beep
  playSuccessBeep() {
    this.playNote(523.25, 'triangle', 0.15, 0.04);
    setTimeout(() => this.playNote(659.25, 'triangle', 0.15, 0.04), 80);
    setTimeout(() => this.playNote(783.99, 'triangle', 0.25, 0.04), 160);
  }

  // Play candle blow sound
  playBlowSound() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.audioCtx || this.audioCtx.state !== 'running') return;

      const now = this.audioCtx.currentTime;
      const bufferSize = this.audioCtx.sampleRate * 0.4;
      const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = this.audioCtx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, now);
      filter.frequency.exponentialRampToValueAtTime(100, now + 0.4);

      const gain = this.audioCtx.createGain();
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.audioCtx.destination);

      noise.start(now);
      setTimeout(() => this.playSuccessBeep(), 250);
    } catch (e) {}
  }

  // Built-in Synth Birthday Melody fallback
  playSynthBirthdayMelody() {
    if (this.isSynthMelodyPlaying) return;
    this.isSynthMelodyPlaying = true;

    const notes = [
      { note: 261.63, dur: 0.3 }, { note: 261.63, dur: 0.2 }, { note: 293.66, dur: 0.5 }, { note: 261.63, dur: 0.5 }, { note: 349.23, dur: 0.5 }, { note: 329.63, dur: 0.9 },
      { note: 261.63, dur: 0.3 }, { note: 261.63, dur: 0.2 }, { note: 293.66, dur: 0.5 }, { note: 261.63, dur: 0.5 }, { note: 392.00, dur: 0.5 }, { note: 349.23, dur: 0.9 },
      { note: 261.63, dur: 0.3 }, { note: 261.63, dur: 0.2 }, { note: 523.25, dur: 0.5 }, { note: 440.00, dur: 0.5 }, { note: 349.23, dur: 0.5 }, { note: 329.63, dur: 0.5 }, { note: 293.66, dur: 0.7 },
      { note: 466.16, dur: 0.3 }, { note: 466.16, dur: 0.2 }, { note: 440.00, dur: 0.5 }, { note: 349.23, dur: 0.5 }, { note: 392.00, dur: 0.5 }, { note: 349.23, dur: 1.0 }
    ];

    let noteIdx = 0;
    this.melodyInterval = setInterval(() => {
      if (!this.isSynthMelodyPlaying) {
        clearInterval(this.melodyInterval);
        return;
      }
      const item = notes[noteIdx];
      if (item) {
        this.playNote(item.note, 'triangle', item.dur, 0.04);
      }
      noteIdx = (noteIdx + 1) % notes.length;
    }, 450);
  }

  stopSynthBirthdayMelody() {
    this.isSynthMelodyPlaying = false;
    if (this.melodyInterval) {
      clearInterval(this.melodyInterval);
    }
  }

  // Robust toggle for MP3 audio track
  toggleBackgroundMusic() {
    if (this.isPlayingMusic) {
      if (this.bgMusic) {
        this.bgMusic.pause();
      }
      this.stopSynthBirthdayMelody();
      this.isPlayingMusic = false;
      return false;
    }

    const tryPlayNextCandidate = () => {
      if (this.currentCandidateIdx >= this.audioCandidates.length) {
        // Fall back to built-in synth melody if no MP3 candidate works
        this.initContext();
        this.playSynthBirthdayMelody();
        this.isPlayingMusic = true;
        return;
      }

      const path = this.audioCandidates[this.currentCandidateIdx];
      this.bgMusic = new Audio(path);
      this.bgMusic.loop = true;
      this.bgMusic.volume = 0.5;

      this.bgMusic.play().then(() => {
        this.isPlayingMusic = true;
      }).catch((err) => {
        this.currentCandidateIdx++;
        tryPlayNextCandidate();
      });
    };

    this.currentCandidateIdx = 0;
    tryPlayNextCandidate();
    return true;
  }
}

export const soundFx = new SoundEngine();
