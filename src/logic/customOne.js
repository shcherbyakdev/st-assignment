import { round } from "utils";
import Base from "./base";

class CustomOne extends Base {
  getP() {
    const expression = 2 * this.d + (this.d * this.e) / 100;
    return round(expression);
  }
}

export default CustomOne;
