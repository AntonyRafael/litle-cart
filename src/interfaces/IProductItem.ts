type PriceTag = {
  name: string;
  value: number;
  rawValue: number;
  isPercentual: boolean;
  identifier: string;
};

export interface IProductItem {
  uniqueId: string;
  id: string;
  productId: string;
  productRefId: any;
  refId: any;
  ean: string;
  name: string;
  skuName: string;
  modalType: any;
  parentItemIndex: any;
  parentAssemblyBinding: any;
  assemblies: Array<any>;
  priceValidUntil: Date | string;
  tax: number;
  price: number;
  listPrice: number;
  manualPrice: any;
  sellingPrice: number;
  rewardValue: number;
  isGift: boolean;
  additionalInfo: {
    brandName: string;
    brandId: string;
    offeringInfo: any;
    offeringType: any;
    offeringTypeId: any;
  };
  preSaleDate: any;
  productCategoryIds: string;
  productCategories: Object;
  quantity: number;
  seller: string;
  sellerChain: Array<string>;
  imageUrl: string;
  detailUrl: string;
  components: Array<any>;
  bundleItems: Array<any>;
  attachments: Array<any>;
  attachmentOfferings: Array<any>;
  offerings: Array<any>;
  priceTags: Array<PriceTag>;
  availability: string;
  measurementUnit: string;
  unitMultiplier: number;
  manufacturerCode: any;
}
