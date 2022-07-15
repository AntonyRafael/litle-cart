export const fixPriceToBRL = (price: number) => {
    let priceValue = price / 100;
    let switchToBRLPattern = `${priceValue}`.replace(".", ",")
    return `R$ ${switchToBRLPattern}`
}