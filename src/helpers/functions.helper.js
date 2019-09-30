import moment from "moment";
import AppConfig from "../config";

export default class FunctionsHelper {
    static dateTimeToString (date, format) {
        if (!date) {
            return "";
        }
        if (!format) {
            return moment(date).format(AppConfig.dateTimeDisplayFormat);
        }
        return moment(date).format(format);
    }
}