export type BasicInfo = {
    name: string;
    age: string;
    breed: string;//品种
    avatar:string;
    weight:string;
}

export type Calendar = {
    title: string,
    time: string
}
//用药时间表 medication schedule
export type MedicineSchedule = Array<Calendar>
//疫苗接种史 vaccination history
export type vaccineHistory = Array<Calendar>
//
export type Record = {
    title:string;
    detail:string;
    photo:string;
}
