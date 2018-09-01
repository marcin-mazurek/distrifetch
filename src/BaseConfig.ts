export default interface BaseConfig {
  /***
   * Number of times to retry if a request failed. Use Infinity for infinitive attemps.
   */
  retry?: number;
}
