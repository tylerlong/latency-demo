class LatencyManager {
  latencies: number[] = [];

  addLatency(num: number) {
    this.latencies.push(num);
  }

  getP95Latency(): number {
    this.latencies.sort((num1, num2) => num1 - num2);
    let index = Math.ceil(this.latencies.length * 0.95);
    index = Math.min(index, this.latencies.length - 1);
    return this.latencies[index];
  }
}

const latencyManger = new LatencyManager();
latencyManger.addLatency(10);
latencyManger.addLatency(5);
for (let i = 0; i < 100; i++) {
  latencyManger.addLatency(1);
}
console.log(`P95 is ${latencyManger.getP95Latency()}`);
