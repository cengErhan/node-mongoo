var mongoose = require('mongoose')
var Customer = require('./customer')

mongoose.connect('mongodb://admin:werty253@ds113445.mlab.com:13445/mongoodb',(error)=>{
    if (!error) {
        console.log(' CONNECTED = TRUE ')
    }
})

var customer1 = new Customer({
    name: "Ehmed Çawlaki",
    city: "Paupur"
})

customer1.save((error)=>{
    if(!error){
        console.log("CUSTOMER =  SAVED ");
    } else {
        throw error;
    }
})

//boş obje bütün nesneleri çeker
Customer.find({city:'Paupur'},(error,data)=>{
    if(!error){
        console.log(data)
    } else {
        throw error
    }
})

// Customer.findById('5c2bfa5031a756046896fe98',(error,data)=>{
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
// }).where('city').equals('istanbul')//.equals ile devam eder 
//gt(22) = 22 den büyük ; lt(30) = 30 dan küçük ; HEAD.select('head') = uyanın sadece select param. getir
//gte = büyük eşit ; lte = küçük eşit ; gte(15).lte(30) = 15 ile 30 arası
//HEAD.select('city name') = HEAD kısmı ile belirtilen kayıtların sadece city ve name ini getir
//.sort('name'). ; '-name' , 

//kaydı guncelleme ÖNCE müşteri bulundu ve onun üstünden işlem yapıldı
// Customer.findById('5c2bfa5031a756046896fe98',(error,data)=>{
//     if (error) {
//         throw error
//     } else {
//         console.log(data)
//         data.name = 'George W. Bush'
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
// Customer.findOneAndUpdate({name:'George W. Bush'},{name:'Barrack Obama'},(error,data)=>{
//     if (error) {
//         throw error
//     } else {
//         console.log('DATA UPDATED')
//     }
// })

















