export const YMDtoMDY  = (YMD : Date) => {

    return  YMD.getFullYear() + YMD.getMonth() +"-" + YMD.getDate();

}

export const MDYtoYMD = (MDY : string) => {
    const MDYArray = MDY.split('/');
    const Days = parseInt(MDYArray[1]) < 10 ? '0'+MDYArray[1] : MDYArray[1];
    const Month = parseInt(MDYArray[0]) < 10 ? '0'+MDYArray[0] : MDYArray[0];
    const Year = MDYArray[2];

    return Year + "-" + Month + "-" + Days;

}