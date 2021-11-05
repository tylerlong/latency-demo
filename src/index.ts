class LatencyManager {
  latencies: number[] = [];

  addLatency(num: number) {
    this.latencies.push(num);
  }

  getP95Latency(): number {
    // todo: add the algorithm here
    return 0;
  }
}

const latencyManger = new LatencyManager();
latencyManger.addLatency(10);
latencyManger.addLatency(5);
latencyManger.addLatency(1);
console.log(`P95 is ${latencyManger.getP95Latency()}`);
