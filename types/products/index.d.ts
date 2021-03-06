interface IProduct {
    img1: string,
    img2: string,
    title: string,
    address: string,
    phone: string,   // дополнительно задание pipe для форматирования
    weather: {
        title:string,
        icon:string,
        water:number,
        temperature: number
    },
    social_info:{ 
        title: string,
        img:string,
        followers:number,
        following:number
    }, 
    type: string
}