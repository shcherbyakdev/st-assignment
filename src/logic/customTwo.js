import { H_VALUES } from "constants/index";
import { round } from "utils";
import Base from "./base";

class CustomTwo extends Base {
  getM() {
    const expression = this.f + this.d + (this.d * this.e) / 100;
    return round(expression);
  }

  getResult() {
    if (this.a && this.b && !this.c) return { H: H_VALUES.T, K: this.getT() };
    if (this.a && !this.b && this.c) return { H: H_VALUES.M, K: this.getM() };

    return super.getResult();
  }
}

export default CustomTwo;
