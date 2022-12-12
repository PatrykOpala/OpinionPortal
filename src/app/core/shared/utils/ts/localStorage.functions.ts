export function getDataFromLocalStorage<TypeReturn>(key: string): TypeReturn{
    let localStorageData: TypeReturn = JSON.parse(window.localStorage.getItem(key) as string);
    return localStorageData;
}

export function setDataInLocalStorage<TypeData>(key: string, data: TypeData){
    window.localStorage.setItem(key, JSON.stringify(data));
}