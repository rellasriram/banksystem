import { executeQuery } from "../../config/db";
const removeaccess = async (req, res) => {
    const x = `
    call remove_account_access("${req.body.username}", "${req.body.selectedExistingCustomer}", "${req.body.selectedExistingBank}", "${req.body.selectedExistingAccount}");
    `;
    console.log(x)
    let accountdata = await executeQuery(x, []);
    res.send(accountdata);
};

export { removeaccess };