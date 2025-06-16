export const searcProducts = (products, query) => {
    if (!query) return [];

    const lowerCaseQuery = query.toLowerCase();

    return products.filter(product =>
        product.name.toLowerCase().includes(lowerCaseQuery) || 
        (product.description && product.description.toLowerCase().includes(lowerCaseQuery)) ||
        (product.category && product.category.toLowerCase().includes(lowerCaseQuery))
    );
};