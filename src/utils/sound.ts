// Web Audio API Synthesizer for instant, zero-latency, offline kid-friendly sound effects

class SoundManager {
  private ctx: AudioContext | null = null;
  private muted: boolean = false;

  constructor() {
    // Check saved mute state
    const saved = localStorage.getItem('kindergarten_coloring_muted');
    if (saved !== null) {
      this.muted = saved === 'true';
    }
  }

  private initCtx() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public isMuted(): boolean {
    return this.muted;
  }

  public toggleMute(): boolean {
    this.muted = !this.muted;
    localStorage.setItem('kindergarten_coloring_muted', String(this.muted));
    if (!this.muted) {
      this.playClick();
    }
    return this.muted;
  }

  // Soft wooden / plastic click for UI buttons
  public playClick() {
    if (this.muted) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(600, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(200, this.ctx.currentTime + 0.06);

      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.06);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.06);
    } catch {
      // AudioContext safe catch
    }
  }

  // Bubbly pop when choosing color
  public playPop() {
    if (this.muted) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(840, now + 0.08);

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.08);
    } catch {}
  }

  // Water drop / paint fill splash
  public playFill() {
    if (this.muted) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      // Frequency drop then rise
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(900, now);
      osc.frequency.exponentialRampToValueAtTime(450, now + 0.08);
      osc.frequency.exponentialRampToValueAtTime(700, now + 0.16);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.16);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.16);
    } catch {}
  }

  // Magical twinkle chime for glitter pen or stars
  public playSparkle() {
    if (this.muted) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      const notes = [1046.5, 1318.5, 1567.98, 2093.0]; // C6, E6, G6, C7
      notes.forEach((freq, idx) => {
        const now = this.ctx!.currentTime + idx * 0.04;
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

        osc.connect(gain);
        gain.connect(this.ctx!.destination);

        osc.start(now);
        osc.stop(now + 0.18);
      });
    } catch {}
  }

  // Squeaky stamp "boing"
  public playStamp() {
    if (this.muted) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(250, now);
      osc.frequency.linearRampToValueAtTime(600, now + 0.07);
      osc.frequency.linearRampToValueAtTime(350, now + 0.15);

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.15);
    } catch {}
  }

  // Fanfare when finishing picture
  public playVictory() {
    if (this.muted) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      // Fanfare: C5, E5, G5, high C6
      const melody = [
        { f: 523.25, dur: 0.12, time: 0 },
        { f: 659.25, dur: 0.12, time: 0.12 },
        { f: 783.99, dur: 0.15, time: 0.24 },
        { f: 1046.5, dur: 0.45, time: 0.40 },
      ];

      melody.forEach(item => {
        const now = this.ctx!.currentTime + item.time;
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(item.f, now);

        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + item.dur);

        osc.connect(gain);
        gain.connect(this.ctx!.destination);

        osc.start(now);
        osc.stop(now + item.dur);
      });
    } catch {}
  }

  // Soft swish for brush stroke
  public playBrushStroke() {
    if (this.muted) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(240, now);
      osc.frequency.linearRampToValueAtTime(320, now + 0.05);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.05);
    } catch {}
  }
}

export const sound = new SoundManager();
