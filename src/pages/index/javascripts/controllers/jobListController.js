import jobListModel, { getData } from '../models/jobListModel'
import jobListView from '../views/job-list.html'
import BScroll from 'better-scroll'

let datasource = []; // 存放所有的数据
let pageNo = 1;
let pageSize = 15;
// let hasMore = true;

const jobListController = {
    run () {
        this.render()
    },
    render () {
        datasource = datasource.concat(jobListModel.result)  
        this.renderList()
        this.handleScroll()// 处理滚动
    },
    renderList () {
        // 如果已经又了template函数，就不用采取编译创建了
        if ( !this.template ) this.template = Handlebars.compile(jobListView);     
        let html = this.template({ data: datasource })
        document.querySelector('.job-list-content').innerHTML = html
    },
    handleScroll () {
        let bscroll = new BScroll($('#job-list-box')[0], {
           click: true,// 启用页面中的点击事件
           probeType: 3,// 启用滚动监听
           pullUpLoad: true // 启用上啦加载
        })
        // 会在上拉到低的时候执行
        bscroll.on('pullingUp',  async () => {
            // if ( !hasMore ) return false;
            // 上拉加载时获取数据 
            pageNo++;
            // await的函数上必须加async 
            // await 后面跟的必须是一个promise实例，await的返回值就是这个promise实例resolve接收的值
            let data = await getData(pageNo, pageSize)
            // 当页数超过5也的时候，取消上啦下载，当没有更多数据的时候...
            if ( pageNo >= 5 ) {
                bscroll.off('pullingUp')
            };
            // 将新数据放入大数据
            datasource = [ ...datasource, ...data ]
            this.renderList()// 渲染新获取到的数据
            bscroll.finishPullUp()// 结束上啦加载
            bscroll.refresh()// 重新计算
        })
    }
}

export default jobListController