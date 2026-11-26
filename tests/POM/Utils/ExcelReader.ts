import XLSX from "xlsx"

export type Edata = {
    UserName : string;
    Password :  string;

}

export function reader() {
    const WorkBook = XLSX.readFile("tests/POM/testData/Utils.xlsx");
    const WorkSheet = WorkBook.Sheets["Sheet1"];
    const data : Edata[] = XLSX.utils.sheet_to_json(WorkSheet);
    return data;

}