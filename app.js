import inquirer from "inquirer";
const timer = async () => {
    let condition = true;
    while (condition) {
        const ques = await inquirer.prompt({
            name: "time",
            type: "confirm",
            message: "can you want to start time ?",
            default: "true"
        });
        if (!ques.time) {
            setTimeout(() => {
                let date = new Date();
                console.clear(); // Clear console to overwrite previous output
                console.log(date.toLocaleTimeString());
            }, 1000);
        }
    }
};
timer();
