export class FormLoader {
  constructor(private onToggleLoader: (loading: boolean) => void) {}

  public start() {
    this.onToggleLoader(true);
  }

  public stop() {
    this.onToggleLoader(false);
  }
}
