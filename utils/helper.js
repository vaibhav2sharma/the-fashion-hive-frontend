export const getDiscountedPricePercentage = (originalprice, discountedprice) => {

    const discount = originalprice-discountedprice;

    const discountPercentage = (discount/originalprice) * 100

    return discountPercentage.toFixed(2)
}