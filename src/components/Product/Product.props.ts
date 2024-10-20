export interface ProductDetails{
    ImageUrl?: string;
    isWhishListed?: boolean;
    productId?: string;
    productName?: string;
    description?: string;
    ratings?: number;
    actualCost?: number;
    currentCost?: number;
    noOfItemsAddedToCart?: number;    
}

export interface ProductProps{
    products:ProductDetails[];
}