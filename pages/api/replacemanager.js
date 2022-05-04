import nc from "next-connect";
import { replacemanager } from "../../controller/admin/replacemanager";

const handler = nc();
handler.get(replacemanager);
handler.delete(replacemanager);
handler.post(replacemanager);
export default handler;