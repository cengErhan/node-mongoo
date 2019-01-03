var mongoose = require('mongoose')
var Customer = require('./customer')

mongoose.connect('your_connect_url',(error)=>{
    if (!error) {
        console.log(' CONNECTED = TRUE ')
    }
})

var customer1 = new Customer({
    name: "name1",
    city: "city1"
})

customer1.save((error)=>{
    if(!error){
        console.log("CUSTOMER =  SAVED ");
    } else {
        throw error;
    }
})

//boş obje bütün nesneleri çeker
Customer.find({city:'city1'},(error,data)=>{
    if(!error){
        console.log(data)
    } else {
        throw error
    }
})

// Customer.findById('id1',(error,data)=>{
//     if(!error){
//         console.log(data)
//     } else {
//         throw error
//     }
// })

// Customer.find({},(error,data)=>{
//     if(error){
//         throw error;
//     } else {
//         console.log(data);
//     }
// }).where('city').equals('city1')//.equals ile devam eder 
//gt(22) = 22 den büyük ; lt(30) = 30 dan küçük ; HEAD.select('head') = uyanın sadece select param. getir
//gte = büyük eşit ; lte = küçük eşit ; gte(15).lte(30) = 15 ile 30 arası
//HEAD.select('city name') = HEAD kısmı ile belirtilen kayıtların sadece city ve name ini getir
//.sort('name'). ; '-name' , 

//kaydı guncelleme ÖNCE müşteri bulundu ve onun üstünden işlem yapıldı
// Customer.findById('id1',(error,data)=>{
//     if (error) {
//         throw error
//     } else {
//         console.log(data)
//         data.name = 'name-2123'
//         data.save((error)=>{
//             if (error) {
//                 throw error
//             } else {
//                 console.log('DATA UPDATED')
//             }
//         })
//     }
// })

//delete işlemi
// data.remove((error)=>{
//     if (error) {
//         throw error
//     } else {
//         console.log('DATA REMOVED')
//     }
// })

// ------------ GELİŞMİŞ SORGULAR ----------------//
// Customer.findOneAndUpdate({name:'name1'},{name:'name1111'},(error,data)=>{
//     if (error) {
//         throw error
//     } else {
//         console.log('DATA UPDATED')
//     }
// })

















