export default class Timer {
  private timer: number = 0;
  private duration: number = 0;
  private overhead: number = 0;
  private isDone: boolean = true;

  SetDuration (duration) {
    this.timer = duration;
    this.duration = duration;
    this.overhead = 0;
    this.isDone = false;
  }

  GetDuration () {
    return this.duration;
  }

  GetTime () {
    return this.timer;
  }

  GetPercent () {
    return this.timer / this.duration;
  }

  Reset () {
    this.timer = this.duration;
    this.overhead = 0;
    this.isDone = false;
  }

  IsDone () {
    return this.timer === 0;
  }

  FirstFinished () {
    if (this.timer > 0) {
      return false;
    }
    if (this.isDone) {
      return false;
    }

    this.isDone = true;
    return true;
  }

  GetOverhead () {
    return this.overhead;
  }

  Update (dt) {
    if (this.timer === 0) {
      return;
    }

    this.timer -= dt;
    if (this.timer < 0) {
      this.overhead = -this.timer;
      this.timer = 0;
    }
  }
}
