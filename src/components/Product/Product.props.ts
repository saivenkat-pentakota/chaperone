export interface ProductDetails{
    ImageUrl: string;
    isWhishListed: boolean;
    productId: string;
    productName: string;
    description: string;
    ratings: number;
    actualCost: number;
    currentCost: number;
    noOfItemsAddedToCart: number;    
    rentOnAdded: boolean,
}

export interface ProductProps{
    products:ProductDetails[];
    incrementQuantity: (productId: string, quantity: number) => void;
    decrementQuantity: (productId: string, quantity: number) => void;
    rentOnAdded: (productId: string, rentOnAdded: boolean) => void;

}