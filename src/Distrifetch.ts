import BaseConfig from './BaseConfig';
import normalizeConfig from './normalizeConfig';
import NormalizedConfig from './NormalizedConfig';

export default class Distrifetch {
  private config: NormalizedConfig;

  constructor(inputConfig: BaseConfig) {
    this.config = normalizeConfig(inputConfig);
  }

  public getConfig() {
    return this.config;
  }
}
