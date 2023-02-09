import { web3, frmsContract, getAccount } from "./blockchsin-service";
import log from "./logging-service";


export const getAllProducts = async () => {
    let products = [];
    const response = await frmsContract.methods.getAllProducts().call();
    for (let i = 0; i < response.length; i++) {
        let product = {};
        product["id"] = response[i][0];
        product["title"] = response[i][1];
        product["imageUrl"] = response[i][2];
        product["stock"] = response[i][3];
        product["price"] = response[i][4];
        product["soldBy"] = response[i][5];
        products.push(product);
    }
    log.table(products);
    return products;
}

export const findAProduct = async (productId) => {
    const response = await frmsContract.methods.getOneProductById(productId).call();
    let product = {};
    product["id"] = response[0];
    product["title"] = response[1];
    product["imageUrl"] = response[2];
    product["stock"] = response[3];
    product["price"] = response[4];
    product["soldBy"] = response[5];
    log.table(product);
    return product;
}

export const addAProduct = async (newProduct) => {
    let account = await getAccount();
    let detached = [];
    detached.push(newProduct[0]);
    detached.push(newProduct[1]);
    detached.push(newProduct[2]);
    detached.push(newProduct[3]);
    detached.push(newProduct[4]);
    detached.push(account);
    await frmsContract.methods.postAProduct(detached).send({
        from: account,
        gas: '1000000'
    });
}

export const updateAProduct = async (newProduct) => {
    let account = await getAccount();
    let detached = [];
    detached.push(newProduct[0]);
    detached.push(newProduct[1]);
    detached.push(newProduct[2]);
    detached.push(newProduct[3]);
    detached.push(newProduct[4]);
    detached.push(account);
    await frmsContract.methods.updateAProduct(detached).send({
        from: account,
        gas: '1000000'
    });
}

export const deleteAProduct = async (productId) => {
    let account = await getAccount();
    const response = await frmsContract.methods.deleteAProduct(productId).send({
        from: account,
        gas: '1000000'
    });
    return response;
}

export const buyAProduct = async (productId, price) => {
    let account = await getAccount();
    const etherValue = web3.utils.fromWei(price, 'ether');
    const wei = web3.utils.toWei(etherValue, 'ether');
    log.info(etherValue + " - " + wei);
    await frmsContract.methods.buyAProduct(productId).send({
        from: account,
        gas: '210000',
        value: web3.utils.toHex(wei)
    });
}
