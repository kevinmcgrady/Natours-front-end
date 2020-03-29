export class FormLoader {
  constructor(private onToggleLoader: (loading: boolean) => void) {}

  start() {
    this.onToggleLoader(true);
  }

  stop() {
    this.onToggleLoader(false);
  }
}
