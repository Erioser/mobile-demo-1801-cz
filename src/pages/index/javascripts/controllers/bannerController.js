import bannerModel from '../models/bannerModel'
import bannerView from '../views/banner.html'

const bannerController = {
    run () {
        this.render()
    },
    render () {
        // 得到了一个编译函数，需要传入html字符串
        let template = Handlebars.compile(bannerView)
        // 执行编译函数得到编译后的字符串
        let html = template(bannerModel)
        document.querySelector('#app-banner').innerHTML = html
    }
}

export default bannerController