import { executeQuery } from "../../config/db";
const workFor = async (req, res) => {
    const x = `
        SELECT * FROM workFor;
    `;
    console.log(x)
    let accountdata = await executeQuery(x, []);
    res.send(accountdata);
};

const sendWorkFor = async (req, res) => {
    const x = `
    call hire_worker("${req.body.selectedEmployee}", "${req.body.selectedBank}", ${req.body.salary});
    `
    console.log(x)
    let accountdata = await executeQuery(x, []);
    res.send(accountdata);
}

export { workFor, sendWorkFor };