export class AppConfig {
  static instance = new AppConfig();

  config = {};

  setConfig(config) {
    this.config = config;
  }
}
