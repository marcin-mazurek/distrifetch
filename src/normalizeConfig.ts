import BaseConfig from './BaseConfig';
import NormalizedConfig from './NormalizedConfig';

export default function normalizeConfig(
  inputConfig: BaseConfig
): NormalizedConfig {
  return {
    retry: inputConfig.retry ? inputConfig.retry : 0
  };
}
