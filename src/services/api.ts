import products from '../../data/product.json'


export async function getProducts() {
    return products
}

export async function getNewProduct(id?: number | string) {
  const product = products.products.find((p:any) => p.id === Number(id))



  return product
}

export async function getAllNewProducts() {
  return Promise.resolve(products.products);
}


export async function login(username: string, password: string) {
    const data = await getProducts(); // بدون هیچ پارامتر
    return data;
}