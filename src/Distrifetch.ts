import BaseConfig from './baseConfig';
import normalizeConfig from './normalizeConfig';
import NormalizedConfig from './NormalizedConfig';

export default class Distrifetch {
  private config: NormalizedConfig;

  constructor(inputConfig: BaseConfig) {
    this.config = normalizeConfig(inputConfig);
  }

  getConfig() {
    return this.config;
  }
}
