import inquirer from "inquirer";
const timer = async () => {
    let condition = true;
    while (condition) {
        const ques = await inquirer.prompt([
            {
                name: "startingNumber",
                type: "number",
                message: "give me the number to start time ? "
            },
            {
                name: "endingNumber",
                type: "number",
                message: "give me the number to end time ? "
            }
        ]);
        let counter = ques.startingNumber;
        if (ques.startingNumber > 0) {
            setInterval(() => {
                if (counter >= ques.endingNumber) {
                    counter = ques.endingNumber;
                    clearInterval(counter);
                    condition = false;
                }
                else {
                    counter = counter + 1;
                    console.clear();
                    console.log(counter);
                }
            }, 1000);
        }
    }
};
timer();
