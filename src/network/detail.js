import {request} from 'network/request.js'

//通过商品id获得商品信息
export function getDetail(iid){
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

//创建获得商品基本信息的类
export class Goods {
  constructor(columns, itemInfo, services) {
    this.title = itemInfo.title
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discountDesc = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.columns = columns
    this.services = services
    this.lowNowPrice = itemInfo.lowNowPrice
    this.desc = itemInfo.desc
  }
}

//创建获得店铺基本信息的类
export class ShopInfo {
  constructor(shopInfo) {
    this.cGoods = shopInfo.cGoods
    this.cSells = shopInfo.cSells
    this.name = shopInfo.name
    this.score = shopInfo.score
    this.shopLogo = shopInfo.shopLogo
    this.shopUrl = shopInfo.shopUrl

  }
}

export class GoodsParams {
  constructor(info, rule) {
    this.image = info.image? info.image[0]: ''
    this.keyI = info.key? info.key : ''
    this.infos = info.set
    this.disclaimer = rule.disclaimer
    this.keyR = rule.key
    this.sizes = rule.tables
  }
}


export function getRecommend() {
  return request({
    url: '/recommend'
  })
}
