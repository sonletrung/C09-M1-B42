let lastChecked;
const inputs = [...document.querySelectorAll("input")];

const handleCheck = (input) => {
    if (inputs.filter((input) => input.checked).length > 2) lastChecked.checked = false;
    lastChecked = input;
};

inputs.forEach((input) => {
    input.addEventListener("change", (e) => {
        if (input.checked) handleCheck(input);
    });
});

