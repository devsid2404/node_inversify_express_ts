import { injectable } from "inversify";


@injectable()
export default class CommonUtils {
    public getSearchArray(stringValue: string = ''): string[] {
        const trimmedString = stringValue.trim().toLowerCase();
        if(trimmedString.startsWith('"') && trimmedString.endsWith('"')){
            return [trimmedString.slice(1, -1).trim()];
        } else {
            return trimmedString.split(' ');
        }
    }

    public sortArrayOfObjects(arrayOfObject, propertyName: string) {
        let sortOrder = 1;
        if(propertyName[0] === "-") {
            sortOrder = -1;
            propertyName = propertyName.slice(1);
        }
        return arrayOfObject.sort((firstElementToCompare, secondElementToCompare) => {
            const result = (firstElementToCompare[propertyName] < secondElementToCompare[propertyName]) ? -1 
                : (firstElementToCompare[propertyName] > secondElementToCompare[propertyName]) ? 1 : 0;
            return result * sortOrder;
        });
    }   
}