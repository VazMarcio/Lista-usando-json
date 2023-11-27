//Lista de compras usando JSON
//Json - javaScript Object Notation
//Chave e valor com o objetivo de transferir dados

let invoice = {
    market: "Vaz Market",
    name: "Marcio",
    age: 56,
    products: {
        0: ["Yogurte", 7.89],
        1: ["Yogurte Grego", 8.30],
        2: ["Cereal ", 12.80],
        3: ["Ovo Bco Gd - 5dz", 30.90],
        4: ["Refresco", 1.09],
        5: ["Leite - lt", 3.59]

    },
    taxes: "1,99"
}
generateInvoice(invoice)

function generateInvoice(invoice){
    console.log(`Nome Do Estabelecimento: ${invoice.market}`)
    console.log(`comprador: ${invoice.name}`)
    console.log(`idade: ${invoice.age}`)
    console.log("---------------------")

for(let index in invoice.products){
    let [productName,productPrice] = invoice.products[index]
    console.log(`- ${productName}: R$ ${productPrice}`)
    
    
}

}