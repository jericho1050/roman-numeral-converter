const get = (element) => document.getElementById(element);

// Roman numerals key value pair with map
const romanValues = new Map([
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1],
]);



class App {
  constructor() {
    this.input;
    this.render();
  }

  render() {
    get("root").innerHTML = `
        <div class="container-sm">
            <div class="row">
                <div class="col">
                    <h1>
                        <span>ROMAN NUMERAL</span><br>
                        <span>CONVERTER</span>
                    </h1>
                    <div class="box-container">
                        <h2>
                            Enter a number:
                        </h2>
                        <input id="number">
                        <button id="convert-btn">Convert</button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p id="output"></p>
                </div>
            </div>
        </div>
        `;
    const button = get("convert-btn");
    button.addEventListener("click", () => {
      const input = get("number");
      const output = get("output");
      this.input = parseInt(input.value); // set state
      // check if input is empty
      if (!this.input) {
        output.innerHTML = "Please enter a valid number";
        output.classList.add('error');
      }
      // check if value is negative
      else if (this.input < 0) {
        output.innerHTML = "Please enter a number greater than or equal to 1";
        output.classList.add('error');
      }
      // check if value exceed the max value
      else if (this.input > 3999) {
        output.innerHTML = "Please enter a number less than or equal to 3999";
        output.classList.add('error');
      }
      // assuming input is valid 
      else {
        let romanNumeral = '';

        // For each key-value pair, while integer is greater than or equal to the value, 
        // append the key to Roman numeral string and subtract the value from the integer.
        romanValues.forEach((value, key) => {
            while(this.input >= value) {
                romanNumeral += key;
                this.input -= value;
            }
        });
        output.innerHTML = romanNumeral;
      }
    });
  }
}

new App();
