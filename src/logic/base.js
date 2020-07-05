import { H_VALUES } from "constants/index";
import { round } from "utils";

class Base {
  constructor(a, b, c, d, e, f) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.e = e;
    this.f = f;
    this.d = d;
  }

  getM() {
    const expression = this.d + (this.d * this.e) / 10;
    return round(expression);
  }

  getP() {
    const expression = this.d + (this.d * (this.e - this.f)) / 25.5;
    return round(expression);
  }

  getT() {
    const expression = this.d - (this.d * this.f) / 30;
    return round(expression);
  }

  getResult() {
    if (this.a && this.b && !this.c) return { H: H_VALUES.M, K: this.getM() };
    if (this.a && this.b && this.c) return { H: H_VALUES.P, K: this.getP() };
    if (!this.a && this.b && this.c) return { H: H_VALUES.T, K: this.getT() };

    return { error: "[error]" };
  }
}

export default Base;
