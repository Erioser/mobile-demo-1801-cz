
import touchView from '../views/touch.html'

const touchController = {
    run () {
        let html = Handlebars.compile(touchView)({ text: 'Hello World' })
        $('#app-touch').html(html)
        this.handleTouch()
    },
    handleTouch () {
        let $demo = $('#app-touch .demo')
        // $demo.on('touchstart', (e) => {
        //     console.log('touchstart', e.touches[0].clientX)
        // })
        // $demo.on('touchmove', (e) => {
        //     console.log('touchmove', e.touches[0].clientX)
        // })
        // $demo.on('touchend', (e) => {
        //     console.log('touchend', e.changedTouches[0].clientX)
        // })
        
        // $demo.swipeLeft(function() {
        //     console.log(1)
        //     $(this).css('background', 'blue')
        // })

        
       

        // touch.on('.demo', 'tap', function () {
        //     console.log(1)  
        // })


        $('.demo').click(function () {
            $(this).css('background', 'blue')
        })

        // $('.middle').click(function () {
        //     $(this).hide()
        // })

        $('.mask').tap(function () {
            $(this).hide()

        })
        // $('.mask').on('webkitAnimationEnd',function () {
        //     $(this).hide()

        // })
    }
}


export default touchController