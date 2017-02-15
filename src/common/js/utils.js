export const imgProxy = (imgUrl) => {
  return imgUrl && imgUrl.replace(/http\w{0,1}:\/\/i/g, 'https://images.weserv.nl/?url=i')
}
