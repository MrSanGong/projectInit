/**
 * 图片名字列表
 * 名字与存放在OSS上的静态图片资源文件名一样
 * （最好统一成png格式上传）
 * @type {string[]}
 */
const imgList = [
  '404',
  '404_cloud',
  'barcode',
  'bg',
  'logo',
  'logo_red',
  'login_img',
  'user',
  'check',
  'cross',
  'warning'
]

const localList = [
  'play',
  'ckb-logo',
  'login_bg',
  'login_pic',
  'tree',
  'icon_recommend',
  'payType_alipay',
  'payType_wallet',
  'payType_wechat'
]

const imgRoot = 'https://statics.xinshuibao1.com/static/img/' // todo 如果CDN服务的地址变了，请修改这里
const localRoot = '/static/image/'

export const imagePicker = (filename) => {
  if (imgList.includes(filename)) {
    return imgRoot + filename + '.png'
  } else if (localList.includes(filename)) {
    return localRoot + filename + '.png'
  } else {
    throw new Error('图片不存在')
  }
}
