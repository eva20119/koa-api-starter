const config = require('config');
const productService = require('./product.service');

const createProduct = async (productData, tenantid) => {
    const product = await productService.create({
        name: productData.name,
        price: productData.price,
        quantity: productData.quantity,
        description: productData.description,
        tenantid

    });
    console.log(`createProduct`);
  return product;
}

exports.createNew = async (ctx) => {
    const productData = ctx.validatedRequest.value;
    console.log(`productData`);
    const { tenantid } = ctx.state.product;
    let product = null;

    try{
        product = await createProduct(productData, tenantid);
        console.log(`product create sucessful`);
    } catch (e) {
        console.log(`\n Caught in product creating exception: ${e}`);
    }
    
    const response = {};
    console.log(`response`);
    response.productid = product.productid;
    ctx.body = response;
};
