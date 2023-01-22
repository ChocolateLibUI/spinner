import "./index.scss"
import { theme } from "@chocolatelibui/theme";
import { initVariableRoot } from "@chocolatelibui/theme"
import { grey } from "@chocolatelib/colors";
import * as spinner from "../src"

export let variables = initVariableRoot('YO', 'Spinner', 'Spinner used as a placeholder for data with and unknown arrival time');
variables.makeVariable('color', 'Dot color', 'Color of dots in spinner', grey['50'], grey['900'], 'Color', undefined);


let light = document.body.appendChild(document.createElement('button'));
light.innerHTML = 'Light Mode';
light.onclick = () => { theme.set = 'light' };
let dark = document.body.appendChild(document.createElement('button'));
dark.innerHTML = 'Dark Mode';
dark.onclick = () => { theme.set = 'dark' };

let tinyBox = document.createElement('div');
document.body.appendChild(tinyBox);
tinyBox.className = 'tiny';
tinyBox.appendChild(new spinner.Dots())

let teenyBox = document.createElement('div');
document.body.appendChild(teenyBox);
teenyBox.className = 'teeny';
teenyBox.appendChild(new spinner.Dots())

let littleBox = document.createElement('div');
document.body.appendChild(littleBox);
littleBox.className = 'little';
littleBox.appendChild(new spinner.Dots())

let bittleBox = document.createElement('div');
document.body.appendChild(bittleBox);
bittleBox.className = 'bittle';
bittleBox.appendChild(new spinner.Dots())

let bigBox = document.createElement('div');
document.body.appendChild(bigBox);
bigBox.className = 'big';
bigBox.appendChild(new spinner.Dots())