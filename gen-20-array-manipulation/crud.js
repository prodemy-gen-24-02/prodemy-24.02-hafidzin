const products = [
    {
                id: 1,
                src: [
                    "../src/assets/bags/bag.jpg",
                    "../src/assets/bags/bag2.webp",
                    "../src/assets/bags/bag3.webp"],
                name: "Brazil Sitio Penha 250g",
                desc: "Flavor Profile: toffee & milk chocolate, read apple, orange zest",
                category: "Espresso roast",
                price: 10,
                
            },{
                id: 2,
                src: [
                    "../src/assets/bags/bag2.webp",
                    "../src/assets/bags/bag.jpg",
                    "../src/assets/bags/bag3.webp"],
                name: "Colombia Sitio Penha 250g",
                desc: "Flavor Profile: toffee & milk chocolate, read apple, orange zest",
                category: "Filter roast",
                price: 12,
                condition: "New"
            },{
                id:3,
                src: [
                    "../src/assets/bags/bag3.webp",
                    "../src/assets/bags/bag.jpg",
                    "../src/assets/bags/bag2.webp"],
                name: "Ethiopia Daye Bensa 250g",
                desc: "Flavor Profile: stonefruit, floral & creamy, dark",
                category: "Espresso roast",
                price: 13
            },{
                id:4,
                src: [
                    "../src/assets/bags/bag2.webp",
                    "../src/assets/bags/bag.jpg",
                    "../src/assets/bags/bag3.webp"],
                name: "Colombia Sitio Penha 250g",
                desc: "Flavor Profile: toffee & milk chocolate, read apple, orange zest",
                category: "Filter roast",
                price: 10
            },{
                id:5,
                src: [
                    "../src/assets/bags/bag.jpg",
                    "../src/assets/bags/bag2.webp",
                    "../src/assets/bags/bag3.webp",],
                name: "Colombia Sitio Penha 250g",
                desc: "Flavor Profile: toffee & milk chocolate, read apple, orange zest",
                category: "Espresso roast",
                price: 11,
                condition: "New"
            },
        ];

const addProduct = () => {
    const newProduct = {
            id:6,
                src: [
                    "../src/assets/bags/bag.jpg",
                    "../src/assets/bags/bag2.webp",
                    "../src/assets/bags/bag3.webp",],
                name: "Colombia Sitio Penha 250g",
                desc: "Flavor Profile: toffee & milk chocolate, read apple, orange zest",
                category: "Espresso roast",
                price: 11,
                condition: "New"
    }

    products.push(newProduct)
    
}

// addProduct();
// console.log(products)
function getId(id){
    const arrayId = products.map((a) => a.id == id);
    const filter = arrayId.indexOf(true);
    if(filter < 0 ){
        console.log("id tidak ada")
    } else {
        return filter;
    }
}
// console.log(getId(5))

const deleteById = (id) => {
    products.splice(getId(id), 1)
}
// deleteById(5);
// console.log(products)

function changePropertyById(id, property){
    const data = {...products[getId(id)], ...property}
    console.log( data )
}

changePropertyById(5, {category : "Dark roast"})
// console.log(products[getId(5)])